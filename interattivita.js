/* Funzioni utilizzate: la maggior parte di esse sono state prese dalla dispensa e modificate */

/* Funzione che riproduce l'audio */
function playAudio() {
   if (click.paused){
      click.load();
   }
   click.play();
}

/* Funzione per far iniziare il quiz di nuovo */
/**/function nuovoQuiz () {
/**/   numeroDomandaCorrente = 0;
/**/   aggiornaDomanda(numeroDomandaCorrente);
/**/   scriviMessaggio(nodoRisultato, "");
       nodoSpiegazione.style.display="none";
/**/   risposteDate = [];
/**/}

/* Funzione che visualizza la prima domanda */
/**/function aggiornaDomanda (i) {
/**/   scriviMessaggio(nodoNumeroDomanda, (i + 1) + "/" + numeroDomande);
/**/   var parte = quiz[i];
       nodoTestoRisposta0.setAttribute("src", parte.risposte[0]);
       nodoTestoRisposta1.setAttribute("src", parte.risposte[1]);
       nodoTestoRisposta2.setAttribute("src", parte.risposte[2]);
/**/   nodoRisposta0.checked = false;
/**/   nodoRisposta1.checked = false;
/**/   nodoRisposta2.checked = false;
/**/}

/* Funzione che scrive un messaggio */
/**/function scriviMessaggio (nodo, messaggio) {
/**/   var nodoTesto = document.createTextNode(messaggio);
/**/   if (nodo.childNodes.length == 0) {
/**/      nodo.appendChild(nodoTesto);
/**/   } else {
/**/      nodo.replaceChild(nodoTesto, nodo.firstChild);
/**/   }
/**/}


/* Funzione che controlla se il quiz è terminato */
/**/function gestoreClickAvanti () {
/**/   try {
/**/      if (numeroDomandaCorrente == numeroDomande) {
/**/         return;
/**/      }
/**/      if (nodoRisposta0.checked) {
/**/         risposteDate[numeroDomandaCorrente] = 0;
/**/      } else if (nodoRisposta1.checked) {
/**/         risposteDate[numeroDomandaCorrente] = 1;
/**/      } else if (nodoRisposta2.checked) {
/**/         risposteDate[numeroDomandaCorrente] = 2;
/**/      } else {
/**/         return;
/**/      }
/**/      numeroDomandaCorrente++;
          playAudio();
/**/      if (numeroDomandaCorrente == numeroDomande) {
/**/         var esito = calcolaEsito();
/**/         var s;
/**/         if (esito == 1) {
/**/           s = "1 risposta esatta su " + numeroDomande;
/**/         } else {
/**/           s = esito + " risposte esatte su " + numeroDomande;
/**/         }
/**/         scriviMessaggio(nodoRisultato, s);
             nodoSpiegazione.style.display="block";
             this.style.display="none";
             nodoInizia.style.display="none";
             nodoBloccoAudio.style.display="none";
/**/      } else {
/**/         aggiornaDomanda(numeroDomandaCorrente);
/**/      }
/**/   } catch ( e ) {
/**/       alert("gestoreClickAvanti " + e);
/**/   }
/**/}

/* Funzione che calcola il risultato */
/**/function calcolaEsito () {
/**/   var numeroRisposteEsatte = 0;
/**/   for (var i = 0; i < quiz.length; i++) {
/**/      var parte = quiz[i];
/**/      if (parte.rispostaEsatta == risposteDate[i]) {
/**/         numeroRisposteEsatte++;
/**/      }
/**/   }
/**/   return numeroRisposteEsatte;
/**/}

/* Funzione per iniziare un nuovo quiz */
/**/function gestoreClickInizia () {
/**/   try {
/**/      nuovoQuiz();
          playAudio();
          nodoAvanti.style.display="inline";
          nodoInizia.style.display="inline";
          nodoBloccoAudio.style.display="block";
/**/   } catch ( e ) {
/**/      alert("gestoreClickInizia " + e);
/**/   }
/**/}

/* Funzione che cambia la spiegazione verso la successiva */
/**/function gestoreClickAvantiS () {
/**/   try {
/**/      if (!automatico){
/**/         cambiaSpiegazione(+1);
/**/      }
          playAudio();
/**/   } catch ( e ){
/**/      alert("gestoreClickAvantiS " + e);
/**/   }
/**/}

/* Funzione che cambia la spiegazione verso la precedente */
/**/function gestoreClickIndietroS () {
/**/   try {
/**/      if (!automatico){
/**/         cambiaSpiegazione(-1);
/**/      }
          playAudio();
/**/   } catch ( e ){
/**/      alert("gestoreClickIndietroS " + e);
/**/   }
/**/}

/* Funzione che permette di passare da una spiegazione all'altra */
/**/function cambiaSpiegazione (x){
/**/   indiceSpiegazioni += x;
/**/   if (indiceSpiegazioni == numeroSpiegazioni) {
/**/      indiceSpiegazioni = 0;
/**/   }
/**/   if (indiceSpiegazioni < 0) {
/**/      indiceSpiegazioni = numeroSpiegazioni - 1;
/**/   }
       scriviMessaggio(nodoSoluzione, spiegazioni[indiceSpiegazioni]);
/**/}

/* Variabili globali */
const click = new Audio("click.mp3");
const SPIEGAZIONI = 4; /* inutile */
var nodoNumeroDomanda;
var nodoRisposta0;
var nodoTestoRisposta0;
var nodoRisposta1;
var nodoTestoRisposta1;
var nodoRisposta2;
var nodoTestoRisposta2;
var nodoAvanti;
var nodoRisultato;
var nodoInizia;
var numeroDomande;
var numeroDomandaCorrente;
var risposteDate;
var nodoSpiegazione;
var nodoAvantiSpiegazione;
var nodoIndietroSpiegazione;
var numeroSpiegazioni;
var indiceSpiegazioni;
var nodoSoluzione;
var automatico;
var nodoBloccoAudio;
var nodoInizia2;

/* Funzione gestoreLoad */
function gestoreLoad () {
   try {
      nodoNumeroDomanda = document.getElementById("numeroDomanda");
      nodoRisposta0 = document.getElementById("risposta0");
      nodoTestoRisposta0 = document.getElementById("testoRisposta0");
      nodoRisposta1 = document.getElementById("risposta1");
      nodoTestoRisposta1 = document.getElementById("testoRisposta1");
      nodoRisposta2 = document.getElementById("risposta2");
      nodoTestoRisposta2 = document.getElementById("testoRisposta2");
      nodoAvanti = document.getElementById("avanti");
      nodoRisultato = document.getElementById("risultato");
      nodoSpiegazione = document.getElementById("spiegazione");
      nodoInizia = document.getElementById("inizia");
      nodoAvantiSpiegazione=document.getElementById("avantispiegazione");
      nodoIndietroSpiegazione=document.getElementById("indietrospiegazione");
      nodoSoluzione=document.getElementById("listaspiegazioni");
      nodoBloccoAudio=document.getElementById("bloccoaudio");
      nodoInizia2=document.getElementById("inizia2");

      nodoAvanti.onclick = gestoreClickAvanti;
      nodoInizia.onclick = gestoreClickInizia;
      nodoInizia2.onclick = gestoreClickInizia;
      nodoAvantiSpiegazione.onclick = gestoreClickAvantiS;
      nodoIndietroSpiegazione.onclick = gestoreClickIndietroS;
  /**/numeroDomande = quiz.length;
  /**/numeroSpiegazioni = spiegazioni.length;
  /**/indiceSpiegazioni = 0;
  /**/automatico = false;
  /**/cambiaSpiegazione(0);
  /**/nuovoQuiz();
   } catch ( e ) {
      alert("gestoreLoad" + e);
   }
}

window.onload = gestoreLoad;

/* Contenuti */
var quiz = [
   { // domanda 1
       risposte : [
                   "intruso01.mp3",
                   "intruso02.mp3",
                   "intruso03.mp3"
                  ],
       rispostaEsatta : 2
   },
   { // domanda 2
       risposte : [
                   "intruso11.mp3",
                   "intruso12.mp3",
                   "intruso13.mp3"
                  ],
       rispostaEsatta : 1
   },
   { // domanda 3
       risposte : [
                   "intruso21.mp3",
                   "intruso22.mp3",
                   "intruso23.mp3"
                  ],
       rispostaEsatta : 2
   },
   { // domanda 4
       risposte : [
                   "intruso31.mp3",
                   "intruso32.mp3",
                   "intruso33.mp3"
                  ],
       rispostaEsatta : 0
    }
];

var spiegazioni = [
   "Nella prima tripletta di suoni il trigger intruso è il crinkling (AUDIO C) dato dallo stropicciamento. Gli altri audio riproducono il tapping dato dal battere delle dita su superfici differenti.",
   "Nella seconda tripletta di suoni il trigger intruso è il glove sound (AUDIO B), il suono dei guanti. Gli altri audio riproducono i suoni delle mani, hands sounds, con delle variazioni.", 
   "Nella terza tripletta di suoni il trigger intruso è il soft spoken (AUDIO B), un parlato basso ma comunque più alto delle altre alternative: infatti gli altri audio riproducono il whispering.", 
   "Nella quarta tripletta non vi è un vero e proprio trigger intruso ma piuttosto una stretegia ASMR intrusa: il soft ASMR (AUDIO A), delicato, contro il fast/aggressive ASMR degli altri audio."
   ]