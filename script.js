
function abrirPerguntas(dificuldade) {
    sessionStorage.setItem("dificuldade",dificuldade)
    window.location.href = "perguntas/perguntas.html"
}