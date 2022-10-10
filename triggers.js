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
}

/* Funzione che gestisce la riproduzione degli audio */
function gestoreRiproduciAudio () {
   try {
      if (this == nodoPlayWhis) {
	      audiowhis.play();
		   audioss.pause();
		   audiotapping.pause();
		   audiocrinkling.pause();
		   audiomouth.pause();
	   } else if (this == nodoPauseWhis) {
	      audiowhis.pause();
	   } else if ((this == nodoVolumeUpW) && (audiowhis.volume < 1)){
		   audiowhis.volume += 0.1;
	   } else if ((this == nodoVolumeDownW) && (audiowhis.volume > 0.1)){
	      audiowhis.volume -= 0.1;
	   } else if (this == nodoPlaySS) {
		   audioss.play();
		   audiowhis.pause();
		   audiotapping.pause();
		   audiocrinkling.pause();
		   audiomouth.pause();
	   } else if (this == nodoPauseSS) {
		   audioss.pause();
	   } else if ((this == nodoVolumeUpSS) && (audioss.volume < 1)){
		   audioss.volume += 0.1;
	   } else if ((this == nodoVolumeDownSS) && (audioss.volume > 0.1)){
	      audioss.volume -= 0.1;
	   } else if (this == nodoPlayTap) {
	      audiotapping.play();
		   audioss.pause();
		   audiowhis.pause();
		   audiocrinkling.pause();
		   audiomouth.pause();
	   } else if (this == nodoPauseTap) {
		   audiotapping.pause();
	   } else if ((this == nodoVolumeUpTap) && (audiotapping.volume < 1)){
	      audiotapping.volume += 0.1;
	   } else if ((this == nodoVolumeDownTap) && (audiotapping.volume > 0.1)){
		   audiotapping.volume -= 0.1;
	   } else if (this == nodoPlayC) {
		   audiocrinkling.play();
		   audioss.pause();
		   audiotapping.pause();
		   audiowhis.pause();
		   audiomouth.pause();
	   } else if (this == nodoPauseC) {
		   audiocrinkling.pause();
	   } else if ((this == nodoVolumeUpC) && (audiocrinkling.volume < 1)){
		   audiocrinkling.volume += 0.1;
	   } else if ((this == nodoVolumeDownC) && (audiocrinkling.volume > 0.1)){
		   audiocrinkling.volume -= 0.1;
	   } else if (this == nodoPlayM) {
		   audiomouth.play();
		   audioss.pause();
		   audiotapping.pause();
		   audiocrinkling.pause();
	      audiowhis.pause();
	   } else if (this == nodoPauseM) {
	      audiomouth.pause();
	   } else if ((this == nodoVolumeUpM) && (audiomouth.volume < 1)){
	      audiomouth.volume += 0.1;
	   } else if ((this == nodoVolumeDownM) && (audiomouth.volume > 0.1)){
		   audiomouth.volume -= 0.1;
	   }
   } catch ( e ) {
       alert("gestoreRiproduciAudio" + e)
   }
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
const audiowhis = new Audio("whispering.mp3");
const audioss = new Audio("softspoken.mp3");
const audiotapping = new Audio("tapping.mp3");
const audiocrinkling = new Audio("crinkling.mp3");
const audiomouth = new Audio("mouthsounds.mp3");
const click = new Audio("click.mp3");
var nodoHeadphones;
var nodoPaginaConsigli;
var nodoPlayWhis;
var nodoPauseWhis;
var nodoVolumeUpW;
var nodoVolumeDownW;
var nodoPlaySS;
var nodoPauseSS;
var nodoVolumeUpSS;
var nodoVolumeDownSS;
var nodoPlayTap;
var nodoPauseTap;
var nodoVolumeUpTap;
var nodoVolumeDownTap;
var nodoPlayC;
var nodoPauseC;
var nodoVolumeUpC;
var nodoVolumeDownC;
var nodoPlayM;
var nodoPauseM;
var nodoVolumeUpM;
var nodoVolumeDownM;

/* Funzione gestoreLoad */
function gestoreLoad () {
   try {
      nodoHeadphones = document.getElementById("headphones");
      nodoPaginaConsigli = document.getElementById("paginaConsigli");
	   nodoPlayWhis = document.getElementById("playwhis");
	   nodoPauseWhis = document.getElementById("pausewhis");
	   nodoVolumeUpW = document.getElementById("volumeup");
	   nodoVolumeDownW = document.getElementById("volumedown");
	   nodoPlaySS = document.getElementById("playss");
	   nodoPauseSS = document.getElementById("pausess");
	   nodoVolumeUpSS = document.getElementById("volumeupss");
	   nodoVolumeDownSS = document.getElementById("volumedownss");
	   nodoPlayTap = document.getElementById("playt");
	   nodoPauseTap = document.getElementById("pauset");
	   nodoVolumeUpTap = document.getElementById("volumeupt");
	   nodoVolumeDownTap = document.getElementById("volumedownt");
	   nodoPlayC = document.getElementById("playc");
	   nodoPauseC = document.getElementById("pausec");
	   nodoVolumeUpC = document.getElementById("volumeupc");
	   nodoVolumeDownC = document.getElementById("volumedownc");
	   nodoPlayM = document.getElementById("playm");
	   nodoPauseM = document.getElementById("pausem");
	   nodoVolumeUpM = document.getElementById("volumeupm");
	   nodoVolumeDownM = document.getElementById("volumedownm");

      nodoHeadphones.onclick = gestoreClickPagina;
      nodoPlayWhis.onclick = gestoreRiproduciAudio;
	   nodoPauseWhis.onclick = gestoreRiproduciAudio;
	   nodoVolumeUpW.onclick = gestoreRiproduciAudio;
	   nodoVolumeDownW.onclick = gestoreRiproduciAudio;
	   nodoPlaySS.onclick = gestoreRiproduciAudio;
	   nodoPauseSS.onclick = gestoreRiproduciAudio;
	   nodoVolumeUpSS.onclick = gestoreRiproduciAudio;
	   nodoVolumeDownSS.onclick = gestoreRiproduciAudio;
	   nodoPlayTap.onclick = gestoreRiproduciAudio;
	   nodoPauseTap.onclick = gestoreRiproduciAudio;
	   nodoVolumeUpTap.onclick = gestoreRiproduciAudio;
	   nodoVolumeDownTap.onclick = gestoreRiproduciAudio;
	   nodoPlayC.onclick = gestoreRiproduciAudio;
	   nodoPauseC.onclick = gestoreRiproduciAudio;
	   nodoVolumeUpC.onclick = gestoreRiproduciAudio;
	   nodoVolumeDownC.onclick = gestoreRiproduciAudio;
	   nodoPlayM.onclick = gestoreRiproduciAudio;
	   nodoPauseM.onclick = gestoreRiproduciAudio;
	   nodoVolumeUpM.onclick = gestoreRiproduciAudio;
	   nodoVolumeDownM.onclick = gestoreRiproduciAudio;
   } catch ( e ) {
      alert("gestoreLoad" + e)
   }
}

window.onload = gestoreLoad;