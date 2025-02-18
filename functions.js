document.addEventListener("DOMContentLoaded", function () {
  var mudaAno = document.getElementById("ano");

  var dataAtual = new Date().getFullYear();

  mudaAno.textContent = dataAtual;
});

