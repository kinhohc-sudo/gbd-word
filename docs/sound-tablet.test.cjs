const test = require('node:test'), assert = require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const context={module:{exports:{}},URL};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../sound-tablet.js'),'utf8'),context);
const {normalize, validTrack} = context.module.exports;
const sample = {id:'track-0001', title:'A vida pede calma', durationSeconds:182,
 url:'https://github.com/kinhohc-sudo/gbd-word/releases/download/sound-tablet-20261013/track-0001.mp3'};
test('search matches Brazilian accents and mixed case', () => assert.equal(normalize('Esperança'), normalize('ESPERANCA')));
test('approved owner release audio validates; redirects and script URLs cannot enter catalog', () => {
 assert.equal(validTrack(sample), true);
 for (const url of ['javascript:alert(1)', 'https://evil.test/track-0001.mp3', sample.url+'?token=secret', sample.url.replace('kinhohc-sudo','someone-else')])
  assert.equal(validTrack({...sample,url}), false);
});
test('short or invalid audio fails catalog validation', () => {
 for (const durationSeconds of [0, 3, NaN, '120']) assert.equal(validTrack({...sample,durationSeconds}), false);
 assert.equal(validTrack({...sample,id:'../wrong'}),false);
});
test('player HTML has every required control and no preload of all tracks',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../sound-tablet.html'),'utf8');
 for(const id of ['audio','tracks','queue','title','search','progress','timer','cassette','play','prev','next','shuffle','repeat','status','trackCount','libraryButton'])
  assert.equal(html.includes('id="'+id+'"'),true,id);
 assert.equal(html.includes('preload="none"'),true);
 assert.equal(html.includes('autoplay'),false);
});
