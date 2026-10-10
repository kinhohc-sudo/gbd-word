'use strict';
const canvas=document.querySelector('#canvas'), play=document.querySelector('#play'), status=document.querySelector('#status'), progress=document.querySelector('#progress');
const stage=document.querySelector('#stage');
document.querySelector('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await stage.requestFullscreen();canvas.focus();}catch{status.textContent='Seu navegador não permitiu a tela cheia.';}});
play.addEventListener('click',async()=>{
  play.disabled=true;progress.hidden=false;status.textContent='Preparando a aventura…';
  try{
    const missing=Engine.getMissingFeatures({threads:false});
    if(missing.length)throw Error('Este navegador precisa de WebGL 2 e WebAssembly. Tente usar uma versão atual do Chrome, Edge ou Firefox.');
    const response=await fetch('pack.json');if(!response.ok)throw Error('Não foi possível buscar o jogo.');const manifest=await response.json();
    const compressed=new Uint8Array(manifest.compressedSize);let received=0;
    for(const chunk of manifest.chunks){
      const result=await fetch(chunk.file);if(!result.ok)throw Error('O download foi interrompido. Tente novamente.');
      const reader=result.body.getReader();const begin=received;
      while(true){const {done,value}=await reader.read();if(done)break;compressed.set(value,received);received+=value.byteLength;progress.value=received/manifest.compressedSize*85;status.textContent=`Carregando a aventura… ${Math.floor(progress.value)}%`;}
      if(received-begin!==chunk.size)throw Error('Um arquivo chegou incompleto. Tente novamente.');
    }
    status.textContent='Abrindo o jogo…';progress.value=88;
    const data=await new Response(new Blob([compressed]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
    if(data.byteLength!==manifest.size)throw Error('O jogo chegou incompleto. Tente novamente.');
    canvas.width=1280;canvas.height=720;
    const engine=new Engine({executable:'index',canvas,canvasResizePolicy:0,focusCanvas:true,experimentalVK:false,persistentPaths:['/userfs'],onPrint:console.log,onPrintError:console.error});
    window.horacioEngine=engine;
    await engine.preloadFile(data,'index.pck');await engine.init('index');progress.value=98;
    await engine.start({args:['--main-pack','index.pck']});
    document.querySelector('#welcome').hidden=true;document.querySelector('#welcome').style.display='none';progress.value=100;canvas.focus();window.gameReady=true;
  }catch(error){status.textContent=error.message||'Não foi possível abrir o jogo. Tente novamente.';play.disabled=false;play.textContent='TENTAR NOVAMENTE';console.error(error);}
});
