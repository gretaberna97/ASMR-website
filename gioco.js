/* Funzioni utilizzate: la maggior parte di esse sono state prese dalla dispensa e modificate */

/* Funzione che riproduce l'audio */
function playAudio() {
   if (click.paused){
      click.load();
   }
   click.play();
}

/* Funzione gestoreCerca */
/**/function gestoreCerca(){
/**/   try {
          rimuoviFigli(nodoParagrafo); /* elimina la stringa di lista descrizioni quando ha sbagliato */
          var relax = nodoRelax.value;
          var luogo = nodoLuogo.value;
          var eta = nodoEta.value;
/**/      var triggers = ricercaMultipla(relax, luogo, eta);
/**/      var listaDescrizioni;
          if((relax == "--cerca--") || (luogo == "--cerca--") || (eta == "--cerca--")){
             listaDescrizioni = ["Risposte incomplete"];
/**/      } else if(triggers.length != 0) {
/**/         listaDescrizioni = calcolaListaDescrizioni(triggers);
             nodoDomande.style.display="none";
             nodoPulisci.style.display="block";
             nodoLink.style.display="block";
/**/      } else {
/**/         listaDescrizioni = ["Nessuna descrizione trovata"];
/**/      }
          playAudio();
/**/      creaLista(nodoRisultato, listaDescrizioni);
/**/      } catch ( e ) {
/**/         alert("gestoreCerca" + e);
/**/      }
/**/}

/* Funzione che calcola la descrizione relativa alla soluzione della ricerca */
/**/function calcolaListaDescrizioni(triggers) {
/**/   var listaDescrizioni = [];
/**/   for (var i = 0; i < triggers.length; i++) {
/**/      var trigger = triggers[i];
          var nodoTitolo = document.createElement("h2");
          var titolo = document.createTextNode(trigger.nome);
          nodoLink.setAttribute("href", trigger.link);
          nodoTitolo.appendChild(titolo); 
          nodoParagrafo.appendChild(nodoTitolo);
/**/      var s = 
/**/         "Il triggers fatto apposta per te è il " + trigger.nome + ". " + trigger.descrizione; 
/**/      listaDescrizioni.push(s);
/**/   }
/**/   return listaDescrizioni;
/**/}

/* Funzione che crea una lista */
/**/function creaLista(nodoLista, elementi) {
       rimuoviFigli(nodoLista);  /* inutile perché ho già rimosso i figli in caso l'utente sbagliato */
/**/   for (var i = 0; i < elementi.length; i++) {
/**/      var elemento = elementi[i];
/**/      nodoLista.appendChild(nodoParagrafo);
/**/      var nodoTesto = document.createTextNode(elemento);
/**/      nodoParagrafo.appendChild(nodoTesto); 
/**/   }
/**/}

/* Funzione che rimuove i figli di un nodo */
/**/function rimuoviFigli(nodo){
/**/   while(nodo.childNodes.length>0){
/**/      nodo.removeChild(nodo.firstChild);
/**/   }
/**/}

/* Funzione che scandisce tutti i triggers */
/**/function ricercaMultipla (relax, luogo, eta) {
/**/   var triggers= [];
/**/   for (var i = 0; i < asmrtrigger.length; i++) {
/**/      var trigger = asmrtrigger[i];
/**/      if (trigger.eta == eta && 
/**/         trigger.luoghi == luogo &&
/**/         trigger.rilassamento == relax) {
/**/         triggers.push(trigger);
/**/      }
/**/   }
/**/   return triggers;
/**/}

/* Funzione che elimina i dati e riporta l'utente alla situazione di partenza */
function gestorePulisci () {
   try {
      nodoPulisci.style.display="none";
      nodoLink.style.display="none";
      nodoRelax.value="--cerca--";
      nodoLuogo.value="--cerca--";
      nodoEta.value="--cerca--";
      nodoDomande.style.display="block";
      rimuoviFigli(nodoRisultato);
      playAudio();
   } catch ( e ) {
      alert("gestorePulisci" + e);
   }
}

/* Variabili globali */
const click = new Audio("click.mp3");
var nodoRelax;
var nodoLuogo;
var nodoEta;
var nodoCerca;
var nodoRisultato;
var nodoPulisci;
var nodoDomande;
var nodoLink;
var nodoParagrafo;

/* Funzione gestoreLoad */
function gestoreLoad () {
   try {
      nodoRisultato = document.getElementById("risultato2");
      nodoRelax=document.getElementById("relax");
      nodoLuogo=document.getElementById("luogo");
      nodoEta=document.getElementById("eta");
      nodoCerca=document.getElementById("cerca");
      nodoPulisci=document.getElementById("pulisci");
      nodoDomande=document.getElementById("domande");
      nodoLink=document.getElementById("collegamento");

      nodoCerca.onclick=gestoreCerca;    
      nodoPulisci.onclick=gestorePulisci;

      nodoPulisci.style.display="none";
      nodoLink.style.display="none";
      nodoParagrafo = document.createElement("p"); 
      nodoRisultato.appendChild(nodoParagrafo);
   } catch ( e ) {
      alert("gestoreLoad" + e);
   }
}

window.onload = gestoreLoad;

/* Contenuti */
var asmrtrigger = [
   {
      nome : "Fixing You Roleplay",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "in una spa",
      eta : "bambino",
      descrizione : "Il Fixed You Roleplay è un visual trigger molto diffuso su Youtube. Si tratta di un gioco di ruolo in cui lo Youtuber interpreta un vero e proprio medico che ha lo scopo di aggiustare la mente degli spettatori. Gli Youtubers utilizzano il Whispering e molti altri suoni come quello prodotto dai guanti in lattice, dai pennelli etc.",
      link : "https://www.youtube.com/watch?v=mm6-oVEsvi4"
   },
   {
      nome : "Back scratch",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "nel letto",
      eta : "bambino",
      descrizione : "Il Back scratch è un rilassante visual trigger in cui lo Youtuber non pratica un vero e proprio massaggio alla schiena di una paziente ma dei dolci grattini. Questo trigger molto spesso viene combinato con il suono prodotto dai pennelli. ",
      link : "https://www.youtube.com/watch?v=0yp318yxoP0"
   },
   {
      nome : "Ear Massage",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "in natura",
      eta : "bambino",
      descrizione : "L'Ear Massage, il massaggio alle orecchie, può essere fatto in molti contesti ma in questo caso considerando la correlazione con la natura molto avvolgente potrebbe essere il suono del massaggio alle orecchie immerso nella natura.",
      link : "https://www.youtube.com/watch?v=5tnohG6Vxtg"
   },
   {
      nome : "Spa Roleplay",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "in una spa",
      eta : "adolescente",
      descrizione : "Lo Spa Roleplay combina sia visual che triggers uditivi. Si tratta di un gioco di ruolo in cui lo Youtuber interpreta un'estetista che si prende cura dello spettatore che guarda il video con un bel massaggio oppure con una bella cura della pelle.",
      link : "https://www.youtube.com/watch?v=7v9iMWYUUKE"       
   },
   {
      nome : "Lotion Sound",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "in una spa",
      eta : "adulto",
      descrizione : "Il Lotion Sound è uno dei trigger più rilassanti tra i suoni ASMR. In questo caso lo Youtuber, con l'utilizzo di una crema, si farà un automasssaggio sulle mani o sulle braccia riproducendo il suono della lozione sul corpo. Molte volte questo trigger è utilizzato in combinazione con l'Ear Massage, il massaggio alle orecchie.",
      link : "https://www.youtube.com/watch?v=zb-v6_eeT7g"
   },
   {
      nome : "Hair Brushing",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "nel letto",
      eta : "adolescente",
      descrizione : "Qualcuno è mai rimasto entusiasto del suono dei capelli? Ebbene l'Hair Brushing, il suono dei capelli quando vengono pettinati, è uno dei trigger più in voga su Youtube. Lo Youtuber, infatti, spazzolerà i capelli a sé stesso o ad un ospite.",
      link : "https://www.youtube.com/watch?v=B077Cn9wJ1A"
   },
   {
      nome : "Head Massage",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "nel letto",
      eta : "adulto",
      descrizione : "L'Head Massage è un trigger che viene utilizzato molte volte negli Spa Roleplay ma in questo caso l'attenzione degli Youtuber è incentrata unicamente sui suoni relativi al massaggio della testa.",
      link : "https://www.youtube.com/watch?v=julm2C5OWW4"
   },
   {
      nome : "Haircut Nature Sound",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "in natura",
      eta : "adulto",
      descrizione : "L'Haircut Sound è il suono dei capelli che vengono tagliati tramite l'uso delle forbici. Molto spesso su Youtube gli artisti utilizzano delle parrucche all'interno dei roleplay immaginando di tagliare realmente i capelli allo spettatore.",
      link : "https://www.youtube.com/watch?v=nV2gVZBh6h8"
   },
   {
      nome : "Water Spray Bottle",
      rilassamento : "prendermi cura di me stesso/a",
      luoghi : "in natura",
      eta : "adolescente",
      descrizione : "Il suono dell'acqua è molto rilassante ma in questo caso ne viene accentuato il suo suono all'interno di una bottiglia oppure il suo suono quando si spruzza l'acqua contenuta in uno spray nebulizzante.",
      link : "https://www.youtube.com/watch?v=KcK_W3mjAg8"
   },
   {
      nome : "Library Roleplay",
      rilassamento : "leggere un libro",
      luoghi : "in una spa",
      eta : "bambino",
      descrizione : "Il Library Roleplay combina sia visual triggers che uditivi. Si tratta di un gioco di ruolo in cui lo Youtuber interpreta un bibliotecario: vi sono riprodotti suoni relativi alla scrittura con la penna, alla tastiera del computer, il whispering ed il soft spoken.",
      link : "https://www.youtube.com/watch?v=MQdl2otF8-M"
   },
   {
      nome : "Reading You",
      rilassamento : "leggere un libro",
      luoghi : "nel letto",
      eta : "bambino",
      descrizione : "Il Reading You è un trigger che è stato creato pensando alla lettura dei libri ai bambini. Lo Youtuber legge un libro tramite il whispering oppure il soft spoken accentuanto la dolcezza della voce.",
      link : "https://www.youtube.com/watch?v=rw4uCGQMB6k"
   },
   {
      nome : "Book Sound",
      rilassamento : "leggere un libro",
      luoghi : "in natura",
      eta : "bambino",
      descrizione : "Questo trigger è fatto apposta per le persone che non solo adorano leggere ma che adorano anche il suono delle pagine quando si sfogliano e il suono delle dita sulla carta.",
      link : "https://www.youtube.com/watch?v=9UmAgJELrDc"
   },
   {
      nome : "Inaudible Whispering",
      rilassamento : "leggere un libro",
      luoghi : "in una spa",
      eta : "adulto",
      descrizione : "Ti è mai capitato di leggere talmente velocemente e a bassa voce da non sentire le tue parole? Con l'Inaudible Whispering lo Youtuber pronuncia delle parole senza che l'ascoltatore riesca a capirle facendo in modo che quest'ultimo si preoccupi solo di ascoltare i suoni.",
      link : "https://www.youtube.com/watch?v=lqTdzbUrvJs"
   },
   {
      nome : "Tapping",
      rilassamento : "leggere un libro",
      luoghi : "nel letto",
      eta : "adolescente",
      descrizione : "Il tapping è un suono generato dalle mani o dalle unghie nel momento in cui toccano ripetutamente degli oggetti. E' uno dei trigger più utilizzati per il rilassamento e molte volte viene usato in combinazione con altri triggers.",
      link : "https://www.youtube.com/watch?v=Wu6kjmw-qGI"
   },
   {
      nome : "Paper Sound",
      rilassamento : "leggere un libro",
      luoghi : "in natura",
      eta : "adolescente",
      descrizione : "Ti piace il suono della carta? Questo trigger allora è fatto apposta per te in quanto si pone lo scopo di riprodurre il suono magico e rilassante della carta quando viene toccata o stropicciata.",
      link : "https://www.youtube.com/watch?v=_A9CNc_U6XU"   
   },
   {
      nome : "Sticky Sound",
      rilassamento : "leggere un libro",
      luoghi : "in una spa",
      eta : "adolescente",
      descrizione : "Se ti piace il suono delle cose appiccicose come quello degli adesivi, delle creme o addirittura degli Slime allora ho trovato il trigger fatto appositamente per te. Lo Sticky sound un trigger abbastanza nuovo ma sta prendendo piede soprattutto tra i più giovani. ",
      link : "https://www.youtube.com/watch?v=ZBYv1VpRVIM"   
   },
   {
      nome : "Coloring Book",
      rilassamento : "leggere un libro",
      luoghi : "nel letto",
      eta : "adulto",
      descrizione : "Il Coloring Book unisce la bellezza del suono delle matite o delle penne sulla carta con aspetti e stimoli visivi generati dai colori.",
      link : "https://www.youtube.com/watch?v=m-Oi1WXBniU"
   },
   {
      nome : "Ice Breaking",
      rilassamento : "leggere un libro",
      luoghi : "in natura",
      eta : "adulto",
      descrizione : "Il suono del ghiaccio che si rompe rappresenta un suono davvero rilassante ed originale nonostante sia difficile da ricreare. Esso non è molto conosciuto su Youtube ma rappresenta una vera sorpresa per quanto riguarda l'attivazione del rilassamento.",
      link : "https://www.youtube.com/watch?v=D2yEbS2GNwI"  
   },
   {
      nome : "Spa Bath Roleplay",
      rilassamento : "stare sulla sabbia",
      luoghi : "in una spa",
      eta : "bambino",
      descrizione : "Lo Spa Bath Roleplay è un visual trigger molto diffuso su Youtube. Si tratta di un gioco di ruolo in cui lo Youtuber interpreta un'estetista che ha lo scopo di rilassare lo spettatore facendolo sostare in una vasca calda, propria dei saloni di bellezza o delle terme. Gli Youtubers utilizzano il Whispering e molti altri suoni. ",
      link : "https://www.youtube.com/watch?v=TK4TDQdx6TE&t=136s"
   },
   {
      nome : "Zen Garden Sound",
      rilassamento : "stare sulla sabbia",
      luoghi : "nel letto",
      eta : "bambino",
      descrizione : "Questo trigger è molto particolare ed è in circolazione da poco. In questo caso lo Youtuber crea insieme allo spettatore un giardino in miniatura accentuando il suono degli oggetti che inserisce volta volta.",
      link : "https://www.youtube.com/watch?v=wxflcCxqebU"
   },
   {
      nome : "Mermaid Roleplay",
      rilassamento : "stare sulla sabbia",
      luoghi : "in natura",
      eta : "bambino",
      descrizione : "Il Mermaid Roleplay è un visual trigger molto diffuso su Youtube. Si tratta di un gioco di ruolo in cui lo Youtuber interpreta una sirena che ha lo scopo di rilassare il giovane spettatore con i suoni classici del mare. ",
      link : "https://www.youtube.com/watch?v=5H1u4Ki08Tw"
   },
   {
      nome : "Hands Sound",
      rilassamento : "stare sulla sabbia",
      luoghi : "in una spa",
      eta : "adolescente",
      descrizione : "Come dice il nome stesso il trigger cerca di riprodurre il suono delle mani quando si toccano fra loro. E' uno dei trigger più amati su Youtube e molto spesso può essere combinato con il Lotion Sound, il suono delle lozioni.",
      link : "https://www.youtube.com/watch?v=mRMhU1Xq0AE&t=762s"
   },
   {
      nome : "Face Brushing",
      rilassamento : "stare sulla sabbia",
      luoghi : "nel letto",
      eta : "adolescente",
      descrizione : "Questo trigger cerca di riprodurre il rilassamento visuale che si ha quando una persona ti sfiora con dei pennelli da trucco: ciò può avere lo scopo di truccare lo spettatore o quello di fare un massaggio.",
      link : "https://www.youtube.com/watch?v=8ZhaObUXqIc&t=227s"
   },
   {
      nome : "Sea of Thieves",
      rilassamento : "stare sulla sabbia",
      luoghi : "in natura",
      eta : "adolescente",
      descrizione : "Questo trigger in realtà è il più originale fra tutti quelli presenti sulla rete. In particolare unisce la passione dei giovani per i videogames con il desiderio di rilassamento. Tramite questo trigger lo spettatore ha la sensazione di essere su una vera barca con le vele spiegate: l'artista cerca di simulare il rilassamento prodotto dallo stare in mare aperto.",
      link : "https://www.youtube.com/watch?v=8dmF-SR63D4"
   },
   {
      nome : "Mic Brushing",
      rilassamento : "stare sulla sabbia",
      luoghi : "in una spa",
      eta : "adulto",
      descrizione : "Il Mic Brushing è un trigger molto in voga sopratutto tra le ragazze Youtuber. In questo caso gli artisti utilizzando un microfono Blue Yeti il quale viene sfiorato da vari pennelli, ma non solo. Il risultato è un suono rilassante adatto ad entrambi i sessi.",
      link : "https://www.youtube.com/watch?v=NOkwfy8zID0"
   },
   {
      nome : "Mouth Sound",
      rilassamento : "stare sulla sabbia",
      luoghi : "nel letto",
      eta : "adulto",
      descrizione : "I suoni creati da questo trigger sono tra più gettonati in quanto vengono riprodotti dalla lingua che assume all'interno della bocca diverse posizioni.",
      link : "https://www.youtube.com/watch?v=nB5nxPZYh7I"
   },
   {
      nome : "Satisfying ASMR",
      rilassamento : "stare sulla sabbia",
      luoghi : "in natura",
      eta : "adulto",
      descrizione : "I suoni soddisfacenti sono quei suoni legati alla soddisfazione visiva: tagliare un oggetto in parti uguali, in maniera incoscia, genera notevolmente più benessere nel vedere tagliato un oggetto in parti disuguali. Si possono utilizzare sia gli slime, cioè un gioco per ragazzi con una consistenza gelatinosa oppure addirittura saponette del bagno etc.",
      link : "https://www.youtube.com/watch?v=Sfo6WdXkvB4"
   },
]