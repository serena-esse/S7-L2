//ESERCIZIO 1

//controlla se in local è presente usr
const check = function () {
  if (localStorage.getItem("usr")) {
    txt = "Ciao, " + localStorage.getItem("usr");
  } else {
    txt = "Nessun dato";
  }
  document.querySelector(".title").innerHTML = txt;
};
//salva il valore
const save = function () {
  let usr = document.getElementById("usr").value;
  localStorage.setItem("usr", usr);
  check();
};
//rimuove il valore
const deleteData = function () {
  localStorage.removeItem("usr");
  check();
};

window.onload = check;

//ESERCIZIO 2

// Recupera l'elemento del timer
const timerElement = document.getElementById("timer");

// Recupera il tempo di inizio dalla sessionStorage
let startTime = sessionStorage.getItem("startTime") ? parseInt(sessionStorage.getItem("startTime")) : Date.now();

// Funzione per aggiornare il timer
function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Tempo trascorso in secondi
  timerElement.textContent = elapsedTime + " secondi";
}

// Aggiorna il timer ogni secondo
const intervalId = setInterval(updateTimer, 1000);

// Salva il tempo di inizio nella sessionStorage
sessionStorage.setItem("startTime", startTime);

// Aggiorna il timer iniziale
updateTimer();

// Cancella il tempo di inizio dalla sessionStorage quando la pagina viene chiusa
window.addEventListener("beforeunload", function () {
  sessionStorage.removeItem("startTime");
  clearInterval(intervalId); // Ferma l'intervallo per evitare che il timer continui ad aggiornarsi dopo che la pagina viene chiusa
});
