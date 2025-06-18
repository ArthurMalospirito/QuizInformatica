
function abrirPerguntas(dificuldade) {
    sessionStorage.setItem("dificuldade",dificuldade)
    window.location.href = "perguntasRadio/perguntasRadio.html"
}