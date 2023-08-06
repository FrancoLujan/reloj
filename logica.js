const reloj = document.querySelector("[data-relog");

function tiempo() {
  let tiempo = new Date();
  let horas = tiempo.getHours();
  let minutos = tiempo.getMinutes();

  let segundos = tiempo.getSeconds();

  if (segundos < 10) {
    segundos = `0${segundos}`;
   
  }
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }
  if (horas < 10) {
    horas = `0${horas}`;
  }
  reloj.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(tiempo, 1000);
