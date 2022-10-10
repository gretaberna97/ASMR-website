/* Funzioni utilizzate */

/* Funzione che riproduce l'audio */
function playAudio() {
   if (click.paused){
      click.load();
   }
   click.play();
}

/* Funzione che apre le pagine */
function apriPagina(nodo) {
   if (nodo.getAttribute("class") == "aperta") {
      nodo.setAttribute("class", "nascosta");
   } else {
      nodo.setAttribute("class", "aperta");
   }
   playAudio();
}

/* Funzione che apre e nasconde le pagine */
function gestoreClickPagina () {
   try {
      if (this == nodoHeadphones) {
         apriPagina(nodoPaginaConsigli);
      } 
      playAudio();
   } catch ( e ) {
      alert("gestoreClickPagina" + e)
   }
}

/* Variabili globali */
const click = new Audio("click.mp3");
var nodoHeadphones;
var nodoPaginaConsigli;

/* Funzione gestoreLoad */
function gestoreLoad () {
   try {
      nodoHeadphones = document.getElementById("headphones");
      nodoPaginaConsigli = document.getElementById("paginaConsigli"); 
    
      nodoHeadphones.onclick = gestoreClickPagina;
   } catch ( e ) {
      alert("gestoreLoad" + e)
   }
}

window.onload = gestoreLoad;