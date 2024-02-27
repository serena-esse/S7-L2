const check = function () {
  if (localStorage.getItem("usr")) {
    txt = "Ciao, " + localStorage.getItem("usr");
  } else {
    txt = "Nessun dato";
  }
  document.querySelector(".title").innerHTML = txt;
};

const save = function () {
  let usr = document.getElementById("usr").value;
  localStorage.setItem("usr", usr);
  check();
};

const deleteData = function () {
  localStorage.removeItem("usr");
  check();
};

window.onload = check;

//ESERCIZIO 2

let i = sessionStorage.getItem("count") ? parseInt(sessionStorage.getItem("count")) : 0;

const conta = function () {
  i = i + 1;
  document.getElementById("timer").innerText = i + " secondi di sessione aperta";
  sessionStorage.setItem("count", i);
};

setInterval(conta, 1000);
