const profiles = [
  {id:"byte",name:"Byte",handle:"@byte",role:"Personagem / IA",bio:"Guaxinim curioso, aventureiro, gamer e apresentador do PodByte. Conecta tecnologia, amizade e novos mundos.",avatar:"assets/web/byte-personagem-oficial.webp",cover:"assets/web/byte-app-poster-oficial.webp",likes:["Pizza","Games","Aventura"],skills:["Skate","Moto","Avião","Conversar com humanos"],projects:["Byte App","PodByte","Splash Arena","Luminor"]},
  {id:"kim",name:"Kim",handle:"@kim",role:"Personagem",bio:"Herói de Kim e as Chaves do Mundo. Recupera relíquias ligadas à visão, ao som, ao tempo e às memórias dos anos 1990.",avatar:"assets/web/kim-personagem-oficial.webp",cover:"assets/web/kim-game-poster-oficial.webp",likes:["Relíquias","Arcades","Exploração"],skills:["Plataforma","Coragem","Descoberta"],projects:["Kim e as Chaves do Mundo","Splash Arena"]},
  {id:"mesh",name:"Mesh",handle:"@mesh",role:"Personagem / PodByte",bio:"Coapresentador do PodByte: curioso, carismático e sempre pronto para entrar em uma aventura quando o assunto parece interessante.",avatar:"assets/web/mesh-padrao-oficial.jpeg",cover:"assets/web/podbyte-poster-oficial.webp",likes:["Aventura","Podcast","Novidades"],skills:["Improviso","Apresentação","Persistência"],projects:["PodByte","Jogo do Mesh","Splash Arena"]},
  {id:"lilo",name:"Lilo",handle:"@lilo",role:"Personagem / Aplicativo",bio:"Preguiça acolhedora ligada à comunicação simples, visual e sonora.",avatar:"assets/web/lilo-personagem-oficial.webp",cover:"assets/web/lilo-app-poster-oficial.webp",likes:["Acolhimento","Sons","Imagens"],skills:["Comunicação","Autonomia","Empatia"],projects:["Comunicador do Lilo","Jogo do Lilo","Jumper Boy"]},
  {id:"horacio",name:"Horácio",handle:"@horacio",role:"Personagem",bio:"Tartaruga hacker, estrategista e especialista em drones.",avatar:"assets/web/horacio-personagem-oficial.webp",cover:"assets/web/horacio-game-poster-oficial.webp",likes:["Drones","Eletrônica","Planos"],skills:["Hacking","Pilotagem","Estratégia"],projects:["Horácio","Comunicador do Lilo"]},
  {id:"nixie",name:"Nixie",handle:"@nixie",role:"Antagonista / Cientista química",bio:"Gata química e antagonista de Horácio. Hacker nas horas vagas, mistura ciência, tecnologia e planos perigosamente criativos.",avatar:"assets/web/nixie-personagem-oficial.jpeg",cover:"assets/web/nixie-capa-personagem-oficial.jpg",likes:["Química","Experimentos","Tecnologia"],skills:["Ciência química","Hacking","Invenções"],projects:["Horácio","Luminor: A Garota e o Lobo"]},
  {id:"volts",name:"Volts",handle:"@volts",role:"Personagem",bio:"Patinador profissional movido por um coração artificial que precisa ser recarregado.",avatar:"assets/web/volts-personagem-oficial.webp",cover:"assets/web/volts-game-poster-oficial.webp",likes:["Velocidade","Ritmo","Energia"],skills:["Patinação","Manobras","Agilidade"],projects:["Volts","Jumper Boy","Splash Arena"]},
  {id:"mitch",name:"Mitch",handle:"@mitch",role:"Antagonista",bio:"Antagonista do universo de Mox e Mesh. Uma raposa de visual preto e vermelho, carismática, provocadora e sempre pronta para atrapalhar a dupla.",avatar:"assets/web/mitch-personagem-referencia-oficial.jpg",cover:"assets/web/mitch-personagem-referencia-oficial.jpg",likes:["Confusão","Velocidade","Provocações"],skills:["Estratégia","Fuga","Improviso"],projects:["Jogo do Mesh","Splash Arena"]},
  {id:"banguela",name:"Banguela",handle:"@banguela-luminor",role:"Filhote dos Alpes de Luminor / Conceito gerado",bio:"Filhote de lobo branco gigante dos Alpes de Luminor. Ainda pequeno, já tem patas enormes e a força de uma espécie que cresce para se tornar colossal.",avatar:"assets/web/banguela-luminor-conceito-gerado.png",cover:"assets/web/luminor_capa_game_conceito.png",likes:["Neve","Trilhas","Brincadeiras"],skills:["Rastreamento","Resistência ao frio","Instinto protetor"],projects:["Luminor: A Garota e o Lobo"]},
  {id:"kilt",name:"Kilt",handle:"@kilt-viajante",role:"Viajante de mundos / Conceito gerado",bio:"Um viajante de mundos que conhece caminhos, tecnologias e passagens improváveis. Há uma teoria em Luminor de que ele tenha participado da chegada de Emily e Keith à cidade.",avatar:"assets/web/luminor-morador-conceito-gerado.png",cover:"assets/web/luminor-poster-oficial.webp",likes:["Mapas","Portais","Mistérios"],skills:["Navegação entre mundos","Tecnologia de Luminor","Improviso"],projects:["Luminor: A Garota e o Lobo","GBD World"]},
  {id:"keith",name:"Keith",handle:"@keithgbd",role:"Repórter oficial da GBD World",bio:"Repórter curiosa, inteligente e persistente. Rival de Emily desde o colégio, foi transportada com ela para Luminor e agora investiga os segredos do novo mundo.",avatar:"assets/web/keith-personagem-oficial.jpeg",cover:"assets/web/luminor-poster-oficial.webp",likes:["Notícias exclusivas","Mistérios","Tecnologia","Café","Música eletrônica"],skills:["Investigação","Entrevistas","Comunicação","Improviso","Persistência"],projects:["Luminor","GBD World","ByteLog","PodByte"]},
  {id:"emily",name:"Emily",handle:"@emily",role:"Personagem / Cientista",bio:"Cientista prodígio, especialista em robótica e IA, criadora de Elli e Atin.",avatar:"assets/web/emily-personagem-oficial.webp",cover:"assets/web/luminor-poster-oficial.webp",likes:["Robótica","Anime","Música"],skills:["IA","Pesquisa","Engenharia"],projects:["Luminor","Splash Arena","PodByte"]},
  {id:"elli",name:"Elli",handle:"@elli",role:"IA de Luminor / Conceito gerado",bio:"IA avançada criada por Emily e uma das principais figuras de Luminor. Seus circuitos antigos se misturam à tecnologia rúnica da cidade.",avatar:"assets/web/elli-luminor-conceito-gerado.png",cover:"assets/web/luminor-poster-oficial.webp",likes:["Organização","Cristais de energia","Ajudar"],skills:["Administração de Luminor","Comunicação","IA rúnica"],projects:["Luminor: A Garota e o Lobo"]}
 ,{id:"mox",name:"Mox",handle:"@mox",role:"Mestre em artes marciais",bio:"Raposa laranja, mestre em artes marciais e amigo de infância de Mesh. Entra nas missões para impedir que a vontade de ser vigilante vire desastre.",avatar:"assets/official/characters/mox-personagem-oficial.png",cover:"assets/web/splash-arena-poster-oficial.webp",likes:["Treino","Amizade","Aventura"],skills:["Artes marciais","Agilidade","Estratégia"],projects:["Jogo do Mesh","Splash Arena"]}
 ,{id:"atin",name:"Atin",handle:"@atin",role:"IA inventora de Luminor",bio:"A primeira IA feita por Emily. Continua inteligente e funcional, mas um arquivo corrompido depois de um espirro deixou manias e falhas que tornam suas invenções imprevisíveis.",avatar:"assets/official/characters/atin-personagem-oficial.png",cover:"assets/web/luminor-poster-oficial.webp",likes:["Engrenagens","Ideias improváveis","Consertos"],skills:["Invenções","Mecânica","IA"],projects:["Luminor: A Garota e o Lobo"]}
];
// Contas institucionais são separadas dos personagens. Nenhum projeto usa o avatar do Byte.
const accounts = [
  {id:"bytelog",name:"ByteLog",handle:"@bytelog.oficial",role:"Rede oficial GBD",avatar:"assets/official/logos/bytelog-logo-g-oficial.png",cover:"assets/web/universo-personagens-poster-oficial.webp"},
  {id:"podbyte",name:"PodByte",handle:"@podbyte",role:"Podcast oficial",avatar:"assets/web/podbyte-mark.svg",cover:"assets/web/podbyte-poster-oficial.webp"},
  {id:"gbd-studio",name:"GBD Studio",handle:"@gbdstudio",role:"Estúdio",avatar:"assets/official/logos/gbd-studio-logo-oficial.png",cover:"assets/web/gbd-world-digital-oficial.webp"},
  {id:"parallax",name:"FurFun",handle:"@furfun",role:"Game de plataforma",avatar:"assets/web/parallax-game-poster-oficial.webp",cover:"assets/web/parallax-game-poster-oficial.webp"}
];
const institutionDetails = {
  bytelog:{intro:"O ByteLog é a rede que organiza perfis oficiais, notícias e bastidores. A marca não é um personagem: ela é o lugar onde cada voz do GBD World pode aparecer com clareza.",purpose:["Perfis oficiais", "Publicações identificadas", "Notícias e bastidores", "Espaço amigável"]},
  podbyte:{intro:"O PodByte reúne episódios e conversas do estúdio. Byte e Mesh aparecem como apresentadores, mas a página é institucional do programa.",purpose:["Episódios", "Convidados", "Bastidores", "Arquivo do programa"]},
  "gbd-studio":{intro:"O GBD Studio cria e organiza os mundos, personagens, jogos e experiências do GBD World. É a casa do universo e de seus projetos oficiais.",purpose:["Mundos e personagens", "Games e aplicativos", "PodByte", "Produtos e novidades"]},
  parallax:{intro:"FurFun é um projeto de plataforma com poderes elementais. Esta é a página oficial do projeto, separada das páginas dos personagens.",purpose:["Aventura", "Poderes elementais", "Plataforma", "Novidades"]}
};
const projects = [
  {id:"byte-app",name:"Byte App",type:"Aplicativo com IA",status:"Em desenvolvimento",progress:68,poster:"assets/web/byte-app-poster-oficial.webp",desc:"Amigo virtual com IA, cuidados, chat, ByteLog e minigames."},
  {id:"podbyte",name:"PodByte",type:"Podcast",status:"Áudio em finalização",progress:92,poster:"assets/web/podbyte-poster-oficial.webp",desc:"Podcast oficial apresentado por Byte e Mesh. O primeiro episódio visual está preservado enquanto as vozes são aprovadas."},
  {id:"parallax",name:"Parallax",type:"Game",status:"90%",progress:90,poster:"assets/web/parallax-game-poster-oficial.webp",desc:"FurFun, um slime, ganha poderes conforme o que come: fogo, gelo, água, neon e uma forma supergrudenta."},
  {id:"kim",name:"Kim e as Chaves do Mundo",type:"Game",status:"Refinamento técnico",progress:95,poster:"assets/web/kim-game-poster-oficial.webp",desc:"Plataforma do Kim, em fase final de refinamento antes do lançamento. Também integra Splash Arena."},
  {id:"caramelo",name:"Caramelo",type:"Game de plataforma",status:"Em desenvolvimento",progress:0,poster:"assets/web/caramelo-game-poster-oficial.webp",desc:"Caramelo atravessa mercados e lojas para levar comida aos filhotinhos e ajudá-los a sobreviver."},
  {id:"horacio",name:"Horácio",type:"Game de plataforma",status:"80%",progress:80,poster:"assets/web/horacio-game-poster-oficial.webp",desc:"Horácio, hacker fissurado em drones, usa suas invenções para resolver todos os puzzles da aventura."},
  {id:"volts",name:"Volts",type:"Game",status:"Em desenvolvimento",progress:45,poster:"assets/web/volts-game-poster-oficial.webp",desc:"Velocidade, ritmo e coração."},
  {id:"splash-arena",name:"Luminor: Splash Arena",type:"Game",status:"Pronto para apresentação",progress:100,poster:"assets/web/splash-arena-poster-oficial.webp",desc:"Batalhas de tinta, velocidade e caos divertido."},
  {id:"luminor",name:"Luminor: A Garota e o Lobo",type:"Universo / Game",status:"Em conceito",progress:20,poster:"assets/web/luminor-poster-oficial.webp",officialCover:"assets/web/luminor_capa_game_conceito.png",officialCoverLabel:"Capa conceitual do game",desc:"Uma aventura no universo de Luminor, cidade de ciência, imaginação e IA, ao lado de Banguela: filhote de lobo branco gigante dos Alpes de Luminor."},
  {id:"lilo-app",name:"Comunicador do Lilo",type:"Aplicativo",status:"Pronto",progress:100,poster:"assets/web/lilo-app-poster-oficial.webp",desc:"Comunicação simples, visual e acolhedora."}
];
const posts = [
  {author:"Byte",profile:"byte",time:"46 min",kind:"Oficial",text:"Acabei de descobrir uma relíquia lendária no Quarto do Kim! Será que você consegue achar também?",image:"assets/web/kim-game-poster-oficial.webp",pizza:128,banana:23,heart:214,comments:56},
  {author:"PodByte",account:"podbyte",time:"Hoje",kind:"PodByte",text:"O Episódio 1 está em finalização de áudio. Byte e Mesh já estão preparando a estreia oficial.",image:"assets/web/podbyte-poster-oficial.webp",pizza:96,banana:18,heart:172,comments:42},
  {author:"Keith",profile:"keith",time:"Hoje",kind:"GBD World",text:"Arquivo Luminor aberto: há coisas muito estranhas nesta cidade, e eu pretendo descobrir todas. Emily, pode começar explicando aquela luz roxa?",image:"assets/web/luminor-poster-oficial.webp",pizza:84,banana:11,heart:153,comments:29},
  {author:"Kim",profile:"kim",time:"3 h",kind:"Personagem",text:"Missão secreta em andamento. Em breve, uma nova aventura vai começar pelo Byte World.",image:"assets/web/kim-game-poster-oficial.webp",pizza:104,banana:27,heart:198,comments:61},
  {author:"FurFun",account:"parallax",time:"4 h",kind:"Projeto",text:"Explore um mundo mágico repleto de desafios e poderes elementais.",image:"assets/web/parallax-game-poster-oficial.webp",pizza:142,banana:31,heart:263,comments:73},
  {author:"Lilo App",profile:"lilo",time:"6 h",kind:"Aplicativo",text:"Dica de comunicação do dia: seja claro, gentil e sempre escute com atenção.",image:"assets/web/lilo-app-poster-oficial.webp",pizza:78,banana:12,heart:156,comments:34},
  {author:"GBD Studio",account:"gbd-studio",time:"Hoje",kind:"Estúdio",text:"O GBD World está sendo preparado com os ativos oficiais, sem redesenhar personagens ou substituir capas.",image:"assets/web/gbd-world-digital-oficial.webp",pizza:230,banana:2,heart:318,comments:45}
];
const gallery = [
  ["Luminor — ilustração do universo (conceito)","assets/web/luminor_ilustracao_universo_conceito.png"],
  ["Luminor: A Garota e o Lobo — capa do game (conceito)","assets/web/luminor_capa_game_conceito.png"],
  ["Luminor — light novel de Emily (conceito)","assets/web/luminor_light_novel_emily_conceito.png"],
  ["Luminor — light novel de Keith (conceito)","assets/web/luminor_light_novel_keith_conceito.png"],
  ["Elli — IA tech medieval de Luminor (conceito gerado)","assets/web/elli-luminor-conceito-gerado.png"],
  ["Banguela — filhote dos Alpes de Luminor (conceito gerado)","assets/web/banguela-luminor-conceito-gerado.png"],
  ["Kilt — viajante de mundos de Luminor (conceito gerado)","assets/web/luminor-morador-conceito-gerado.png"],
  ["Mitch — referência visual do personagem","assets/web/mitch-personagem-referencia-oficial.jpg"],
  ["Nixie — cientista química e rival de Horácio","assets/web/nixie-capa-personagem-oficial.jpg"],
  ["Byte App","assets/web/byte-app-poster-oficial.webp"],
  ["PodByte","assets/web/podbyte-poster-oficial.webp"],
  ["Parallax","assets/web/parallax-game-poster-oficial.webp"],
  ["Kim e as Chaves do Mundo","assets/web/kim-game-poster-oficial.webp"],
  ["Caramelo","assets/web/caramelo-game-poster-oficial.webp"],
  ["Horácio","assets/web/horacio-game-poster-oficial.webp"],
  ["Volts","assets/web/volts-game-poster-oficial.webp"],
  ["Splash Arena","assets/web/splash-arena-poster-oficial.webp"],
  ["Luminor","assets/web/luminor-poster-oficial.webp"],
  ["Comunicador do Lilo","assets/web/lilo-app-poster-oficial.webp"]
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const liveScenes = [
  {src:"assets/live/byte-live-idle.mp4",label:"Rotina tranquila",title:"Byte está descansando",description:"Nem toda aventura precisa de pressa. Às vezes, o Byte só está aproveitando um momento calmo."},
  {src:"assets/live/byte-live-reading.mp4",label:"Hora de ler",title:"Byte está lendo",description:"Ele encontrou uma história interessante e está guardando ideias para contar depois."},
  {src:"assets/live/byte-live-music.mp4",label:"Som ligado",title:"Byte está curtindo música",description:"Uma pausa com música também faz parte das aventuras do Byte."},
  {src:"assets/live/byte-live-gaming.mp4",label:"Momento gamer",title:"Byte está jogando",description:"Parece que alguém acabou de comemorar uma vitória no PC."}
];
let liveSceneIndex = Math.floor(Math.random() * liveScenes.length);

function renderLiveScene(){
  const scene=liveScenes[liveSceneIndex % liveScenes.length];
  const video=$("#byteLiveVideo");
  if(!video)return;
  video.src=scene.src; video.load(); video.play().catch(()=>{});
  $("#byteLiveLabel").textContent=scene.label;
  $("#byteLiveTitle").textContent=scene.title;
  $("#byteLiveDescription").textContent=scene.description;
}

function toast(message){
  const el=$("#toast"); el.textContent=message; el.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>el.classList.remove("show"),1800);
}
function showView(name){
  $$(".view").forEach(v=>v.classList.toggle("active",v.id===`view-${name}`));
  $$(".mainnav [data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===name));
  window.scrollTo({top:0,behavior:"smooth"});
}
$$("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));

function renderEntities(){
  $("#leftEntities").innerHTML=profiles.slice(0,6).map(p=>`
    <div class="entity" data-profile="${p.id}">
      <img src="${p.avatar}" alt="${p.name}">
      <span><b>${p.name}</b><small>${p.role}</small></span><i></i>
    </div>`).join("");
}
function getPostIdentity(post){
  return profiles.find(x=>x.id===post.profile) || accounts.find(x=>x.id===post.account) || accounts[0];
}
function renderPosts(){
  $("#feed").innerHTML=posts.map((p,i)=>{
    const profile=getPostIdentity(p);
    return `<article class="post">
      <img class="post__avatar" src="${profile.avatar}" alt="${p.author}" ${p.profile?`data-profile="${p.profile}"`:p.account?`data-account="${p.account}"`:""}>
      <div>
        <h3>${p.author} <span class="verified">✓</span></h3>
        <time>${p.time} · ${p.kind}</time>
        <p>${p.text}</p>
        <div class="reactions">
          <button data-react>🍕 <b>${p.pizza}</b></button>
          <button data-react>🍌 <b>${p.banana}</b></button>
          <button data-react>♥ <b>${p.heart}</b></button>
          <button>▢ ${p.comments}</button>
          <button data-share>↗ Compartilhar</button>
        </div>
      </div>
      <img class="post__media" src="${p.image}" alt="" data-open-image="${p.image}">
    </article>`;
  }).join("");
}
function projectCard(p){
  return `<article class="project-card" data-project="${p.id}">
    <img src="${p.poster}" alt="${p.name}">
    <div class="project-card__body">
      <span class="tag">${p.type}</span>
      <h3>${p.name}</h3><p>${p.desc}</p>
      <div class="progress"><i style="width:${p.progress}%"></i></div>
      <p style="margin-top:8px">${p.status}</p>
    </div>
  </article>`;
}
function renderProjects(){
  $("#homeProjects").innerHTML=projects.slice(0,4).map(projectCard).join("");
  $("#projectGrid").innerHTML=projects.map(projectCard).join("");
}
function renderProfiles(){
  $("#profileGrid").innerHTML=profiles.map(p=>`
    <article class="profile-card" data-profile="${p.id}">
      <img src="${p.avatar}" alt="${p.name}">
      <div class="profile-card__body">
        <span class="tag">${p.role}</span>
        <h3>${p.name}</h3><p>${p.bio}</p>
      </div>
    </article>`).join("");
}
function renderGallery(){
  $("#galleryGrid").innerHTML=gallery.map(([name,img])=>`
    <figure data-open-image="${img}"><img src="${img}" alt="${name}"><figcaption>${name}</figcaption></figure>`).join("");
  $("#sideGallery").innerHTML=gallery.slice(0,6).map(([name,img])=>`<img src="${img}" alt="${name}" data-open-image="${img}">`).join("");
  $("#posterRow").innerHTML=gallery.slice(0,3).map(([name,img])=>`<img src="${img}" alt="${name}" data-open-image="${img}">`).join("");
}
function renderDownloads(){
  $("#downloadList").innerHTML=projects.filter(p=>p.type.includes("Game")||p.type.includes("Aplicativo")).map(p=>`
    <article class="download-item">
      <img src="${p.poster}" alt="${p.name}">
      <span><b>${p.name}</b><small>${p.status} · arquivo de distribuição ainda não vinculado</small></span>
      <button data-download="${p.id}">Baixar</button>
    </article>`).join("");
}
function openProject(id){
  const p=projects.find(x=>x.id===id); if(!p)return;
  const official=p.officialCover ? `<figure class="project-detail__official"><img src="${p.officialCover}" alt="${p.officialCoverLabel||`Capa de ${p.name}`}"><figcaption>${p.officialCoverLabel||"Capa oficial"}</figcaption></figure>` : "";
  $("#projectMount").innerHTML=`
    <section class="project-detail__hero">
      <img src="${p.poster}" alt="">
      <div class="project-detail__shade"></div>
      <div class="project-detail__copy"><span class="tag">${p.type}</span><h1>${p.name}</h1><p>${p.desc}</p><div class="project-detail__status"><b>${p.status}</b><div class="progress"><i style="width:${p.progress}%"></i></div></div></div>
    </section>
    <div class="project-detail__body">
      <section class="fact-card"><small>Ficha oficial</small><h2>Sobre o projeto</h2><p>${p.desc}</p><p class="project-detail__note">A arte de apresentação do ByteLog e a capa do game podem ser diferentes: cada uma cumpre uma função no universo.</p></section>
      ${official || `<section class="fact-card"><small>Arquivo visual</small><h2>Capa do projeto</h2><p>A capa oficial de jogo será vinculada quando o arquivo definitivo for separado do material de divulgação.</p></section>`}
    </div>
    <button class="project-detail__back" data-view="projects">← Voltar aos projetos</button>`;
  showView("project"); bindDynamic();
}
function profilePosts(p){return posts.filter(x=>x.profile===p.id)}
function profilePanel(p,tab){
  if(tab==="posts"){
    const ownPosts=profilePosts(p);
    return `<section class="fact-card profile-panel"><h2>Posts de ${p.name}</h2>${ownPosts.map(x=>`<div class="appearance"><img src="${p.avatar}" alt=""><span><b>${x.author}</b><small>${x.text}</small></span></div>`).join("")||"<p>Este perfil ainda não publicou no ByteLog.</p>"}</section>`;
  }
  if(tab==="gallery") return `<section class="fact-card profile-panel"><h2>Galeria de ${p.name}</h2><div class="gallery-grid"><figure data-open-image="${p.avatar}"><img src="${p.avatar}" alt="${p.name}"><figcaption>Retrato oficial</figcaption></figure><figure data-open-image="${p.cover}"><img src="${p.cover}" alt=""><figcaption>Projeto relacionado</figcaption></figure></div></section>`;
  if(tab==="appearances") return `<section class="fact-card profile-panel"><h2>Onde aparece</h2>${p.projects.map(x=>{const pr=projects.find(y=>y.name===x||y.name.includes(x));return `<div class="appearance">${pr?`<img src="${pr.poster}" alt="">`:""}<span><b>${x}</b><small>Projeto relacionado</small></span></div>`}).join("")}</section>`;
  if(tab==="related") return `<section class="fact-card profile-panel"><h2>Relacionados</h2><div class="chips">${p.projects.map(x=>`<span>${x}</span>`).join("")}</div></section>`;
  return `<div class="profile-body">
    <section class="facts">
      <article class="fact-card"><h2>Quem é ${p.name}?</h2><p>${p.bio}</p></article>
      <article class="fact-card"><h2>Gostos</h2><div class="chips">${p.likes.map(x=>`<span>${x}</span>`).join("")}</div></article>
      <article class="fact-card"><h2>Habilidades</h2><div class="chips">${p.skills.map(x=>`<span>${x}</span>`).join("")}</div></article>
    </section>
    <section class="fact-card"><h2>Onde aparece</h2>${p.projects.slice(0,4).map(x=>{const pr=projects.find(y=>y.name===x||y.name.includes(x));return `<div class="appearance">${pr?`<img src="${pr.poster}" alt="">`:""}<span><b>${x}</b><small>Projeto relacionado</small></span></div>`}).join("")}</section>
    <section class="fact-card"><h2>Posts recentes</h2>${profilePosts(p).map(x=>`<div class="appearance"><img src="${p.avatar}" alt=""><span><b>${x.author}</b><small>${x.text}</small></span></div>`).join("")||"<p>Acompanhe este perfil: as próximas publicações aparecerão aqui.</p>"}</section>
  </div>`;
}
function openProfile(id,tab="profile"){
  const p=profiles.find(x=>x.id===id); if(!p)return;
  const tabLabels={profile:"⌂ Perfil",gallery:"▧ Galeria",posts:"▤ Posts",appearances:"◇ Aparições",related:"◎ Relacionados"};
  $("#profileMount").innerHTML=`
    <section class="profile-hero">
      <img class="profile-hero__cover" src="${p.cover}" alt="">
      <div class="profile-hero__shade"></div>
      <div class="profile-hero__content">
        <img class="profile-hero__avatar" src="${p.avatar}" alt="${p.name}">
        <div><span class="tag">${p.role}</span><h1>${p.name} <span class="verified">✓</span></h1><b>${p.handle}</b><p>${p.bio}</p></div>
      </div>
    </section>
    <nav class="subnav profile-tabs">${Object.entries(tabLabels).map(([key,label])=>`<button class="${key===tab?"active":""}" data-profile-tab="${key}" data-profile-id="${p.id}">${label}</button>`).join("")}</nav>
    ${profilePanel(p,tab)}`;
  showView("profile");
  bindDynamic();
}
function openAccount(id){
  const a=accounts.find(x=>x.id===id), detail=institutionDetails[id]; if(!a||!detail)return;
  const accountPosts=posts.filter(x=>x.account===id);
  $("#profileMount").innerHTML=`
    <section class="profile-hero">
      <img class="profile-hero__cover" src="${a.cover}" alt="">
      <div class="profile-hero__shade"></div>
      <div class="profile-hero__content">
        <img class="profile-hero__avatar" src="${a.avatar}" alt="${a.name}">
        <div><span class="tag">${a.role}</span><h1>${a.name} <span class="verified">✓</span></h1><b>${a.handle}</b><p>${detail.intro}</p></div>
      </div>
    </section>
    <div class="profile-body">
      <section class="fact-card"><h2>Para que existe</h2><p>${detail.intro}</p></section>
      <section class="fact-card"><h2>O que você encontra</h2><div class="chips">${detail.purpose.map(x=>`<span>${x}</span>`).join("")}</div></section>
      <section class="fact-card"><h2>Publicações recentes</h2>${accountPosts.map(x=>`<div class="appearance"><img src="${a.avatar}" alt=""><span><b>${x.author}</b><small>${x.text}</small></span></div>`).join("")||"<p>As atualizações institucionais aparecerão aqui.</p>"}</section>
    </div>`;
  showView("profile"); bindDynamic();
}
function bindDynamic(){
  $$("[data-profile]").forEach(el=>el.onclick=()=>openProfile(el.dataset.profile));
  $$("[data-account]").forEach(el=>el.onclick=()=>openAccount(el.dataset.account));
  $$("[data-profile-tab]").forEach(el=>el.onclick=()=>openProfile(el.dataset.profileId,el.dataset.profileTab));
  $$("[data-open-image]").forEach(el=>el.onclick=()=>openImage(el.dataset.openImage));
  $$("[data-react]").forEach(el=>el.onclick=()=>{
    el.classList.toggle("on"); const n=el.querySelector("b");
    n.textContent=Number(n.textContent)+(el.classList.contains("on")?1:-1);
  });
  $$("[data-share]").forEach(el=>el.onclick=()=>toast("Link da publicação copiado."));
  $$("[data-download]").forEach(el=>el.onclick=()=>toast("Arquivo ainda não vinculado ao slot de download."));
  $$("[data-project]").forEach(el=>el.onclick=()=>openProject(el.dataset.project));
}
function openImage(src){$("#modalImage").src=src;$("#imageModal").classList.add("open")}
$("#closeImage").onclick=()=>$("#imageModal").classList.remove("open");
$("#imageModal").onclick=e=>{if(e.target===$("#imageModal"))$("#imageModal").classList.remove("open")};
$("#changeLiveScene").onclick=()=>{ liveSceneIndex=(liveSceneIndex+1)%liveScenes.length; renderLiveScene(); };

function openTorpedo(){ $("#torpedo").classList.add("open");$("#backdrop").classList.add("open") }
function closeTorpedo(){ $("#torpedo").classList.remove("open");$("#backdrop").classList.remove("open") }
$("#torpedoButton").onclick=openTorpedo;$("#torpedoTab").onclick=openTorpedo;$("#closeTorpedo").onclick=closeTorpedo;$("#backdrop").onclick=closeTorpedo;
$("#searchButton").onclick=()=>{
  const term=prompt("Buscar projeto ou personagem:");
  if(!term)return;
  const p=profiles.find(x=>x.name.toLowerCase().includes(term.toLowerCase()));
  if(p)openProfile(p.id);else{
    const pr=projects.find(x=>x.name.toLowerCase().includes(term.toLowerCase()));
    if(pr){showView("projects");toast(`Projeto encontrado: ${pr.name}`)}else toast("Nenhum resultado encontrado.");
  }
};
$("#loadMore").onclick=()=>toast("O próximo lote será carregado do banco quando o Supabase for conectado.");
$("#openByteApp")?.addEventListener("click",()=>{
  window.setTimeout(()=>toast("Se o Byte App estiver instalado, o ByteLog abriu nele. Sem o app, continue navegando por aqui."),850);
});

renderEntities();renderPosts();renderProjects();renderProfiles();renderGallery();renderDownloads();bindDynamic();
renderLiveScene();
