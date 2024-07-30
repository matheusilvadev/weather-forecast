const key = "9cc9e172180948f5c225c71ff2a424b1";

function colocarDadosNaTela(dados) {
  console.log(dados);
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".time").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".text").innerHTML = dados.weather[0].description;
  document.querySelector(".moisture").innerHTML = dados.main.humidity + "%";
  document.querySelector(
    ".img-time"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-city").value;

  buscarCidade(cidade);
}
