(() => {
  'use strict';
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  function validTrack(track) {
    try {
      const url = new URL(track.url);
      return /^track-\d{4}$/.test(track.id) && typeof track.title === 'string' && track.title.length > 0 &&
        Number.isFinite(track.durationSeconds) && track.durationSeconds >= 20 &&
        url.protocol === 'https:' && url.hostname === 'github.com' && !url.username && !url.password && !url.search &&
        url.pathname.startsWith('/kinhohc-sudo/gbd-word/releases/download/sound-tablet-20261013/') &&
        /^track-\d{4}\.mp3$/.test(url.pathname.split('/').pop());
    } catch { return false; }
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {normalize, validTrack}; return;
  }
  const $ = id => document.getElementById(id);
  const audio = $('audio'), tracks = $('tracks'), queue = $('queue'), title = $('title');
  let list = [], current = -1, random = false, loop = false;
  const fmt = value => Number.isFinite(value) ? `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}` : '0:00';
  function render() {
    tracks.replaceChildren();
    const term = normalize($('search').value), fragment = document.createDocumentFragment();
    list.forEach((track, index) => {
      if (!normalize(track.title).includes(term)) return;
      const row = document.createElement('div'); row.className = 'track' + (index === current ? ' active' : '');
      const button = document.createElement('button'); button.type = 'button';
      button.textContent = index === current && !audio.paused ? 'Ⅱ' : '▶';
      button.setAttribute('aria-label', `Tocar ${track.title}`);
      const details = document.createElement('div'), name = document.createElement('b'), label = document.createElement('small');
      name.textContent = track.title; label.textContent = 'Sound Tablet'; details.append(name, label);
      const duration = document.createElement('span'); duration.textContent = fmt(track.durationSeconds);
      row.append(button, details, duration); row.addEventListener('click', () => load(index, true)); fragment.append(row);
    });
    tracks.append(fragment); queue.replaceChildren();
    for (let n = 1; n < Math.min(5, list.length); n++) {
      const track = list[(Math.max(current, 0) + n) % list.length], row = document.createElement('div'); row.className = 'q';
      const icon = document.createElement('i'); icon.textContent = '♪';
      const label = document.createElement('b'); label.textContent = track.title; row.append(icon, label); queue.append(row);
    }
  }
  async function play() {
    try { await audio.play(); } catch { $('status').textContent = 'Não foi possível tocar esta faixa.'; }
  }
  function load(index, start = false) {
    if (!list.length) return;
    current = (index + list.length) % list.length; audio.src = list[current].url;
    title.textContent = list[current].title; $('status').textContent = ''; render(); if (start) play();
  }
  function next() {
    if (!list.length) return;
    let index = current + 1;
    if (random && list.length > 1) { do { index = Math.floor(Math.random() * list.length); } while (index === current); }
    load(index, true);
  }
  $('play').addEventListener('click', () => { if (current < 0) load(0); audio.paused ? play() : audio.pause(); });
  $('prev').addEventListener('click', () => load(current - 1, true)); $('next').addEventListener('click', next);
  $('shuffle').addEventListener('click', () => { random = !random; $('shuffle').classList.toggle('on', random); $('shuffle').setAttribute('aria-pressed', String(random)); });
  $('repeat').addEventListener('click', () => { loop = !loop; $('repeat').classList.toggle('on', loop); $('repeat').setAttribute('aria-pressed', String(loop)); });
  $('search').addEventListener('input', render);
  $('progress').addEventListener('input', () => { if (Number.isFinite(audio.duration)) audio.currentTime = audio.duration * Number($('progress').value) / 100; });
  $('libraryButton').addEventListener('click', () => $('library').scrollIntoView({behavior: 'smooth'}));
  audio.addEventListener('playing', () => { $('cassette').classList.add('playing'); $('status').textContent = ''; });
  audio.addEventListener('waiting', () => { $('cassette').classList.remove('playing'); $('status').textContent = 'Carregando…'; });
  audio.addEventListener('play', () => { $('play').textContent = 'Ⅱ'; $('play').setAttribute('aria-label', 'Pausar'); render(); });
  audio.addEventListener('pause', () => { $('cassette').classList.remove('playing'); $('play').textContent = '▶'; $('play').setAttribute('aria-label', 'Tocar'); render(); });
  audio.addEventListener('error', () => { $('cassette').classList.remove('playing'); $('status').textContent = 'Esta faixa não pôde ser carregada.'; });
  audio.addEventListener('timeupdate', () => { $('progress').value = Number.isFinite(audio.duration) ? 100 * audio.currentTime / audio.duration : 0; $('timer').textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`; });
  audio.addEventListener('ended', () => { if (loop) { audio.currentTime = 0; play(); } else next(); });
  fetch('/data/sound-tablet.json', {cache: 'no-cache'}).then(response => {
    if (!response.ok) throw new Error('CATALOG_UNAVAILABLE'); return response.json();
  }).then(catalog => {
    if (!Array.isArray(catalog.tracks) || !catalog.tracks.every(validTrack)) throw new Error('CATALOG_INVALID');
    list = catalog.tracks; $('trackCount').textContent = String(list.length);
    $('play').disabled = !list.length; render();
  }).catch(() => { $('status').textContent = 'Biblioteca indisponível no momento.'; $('play').disabled = true; });
})();
