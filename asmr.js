/* Funzioni utilizzate */

/* Funzione che riproduce l'audio */
function playAudio() {
   if (click.paused){
      click.load();
   }
   click.play();
}

/* Funzione gestoreClick */
function gestoreClick(id){
   try {
      for(var i in questions) {
         document.getElementById(questions[i]).style.display="none";
	   }
      document.getElementById(questions[this.id]).style.display="block";
      nodoInformazioni.style.display="none";
      playAudio();
   } catch( e ) {
      alert("gestoreClick" + e);
   }
}

/* Variabili globali */
const click = new Audio("click.mp3");
const intro = new Audio("intro.mp3");
var nodoStoria;
var nodoBenefici;
var nodoDiffusione;
var nodoInformazioni;

/* Funzione gestoreLoad */
function gestoreLoad(){
   try {
      nodoStoria=document.getElementById("storia");
      nodoBenefici=document.getElementById("benefici");
      nodoDiffusione=document.getElementById("diffusione");
      nodoInformazioni=document.getElementById("information");
      nodoStoria.onclick=gestoreClick;
      nodoBenefici.onclick=gestoreClick;
      nodoDiffusione.onclick=gestoreClick;

      intro.play();
      for(var i in questions) {
	      document.getElementById(questions[i]).style.display="none";
	   }
   } catch( e ) {
      alert("gestoreLoad" + e);
   }
}

window.onload=gestoreLoad;

/* Contenuti */
var questions = {
   storia:"history",
   benefici:"benefits",
   diffusione:"diffusion",
};