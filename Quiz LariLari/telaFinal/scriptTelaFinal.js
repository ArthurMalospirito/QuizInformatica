

function voltarInicio() {
    window.location.href="../index.html"
}

let pontuacao = sessionStorage.getItem("pontuacao");

const pontuacaoTotal = document.getElementById("pontuacaoTotal");

pontuacaoTotal.innerHTML = pontuacao + " Pontos"