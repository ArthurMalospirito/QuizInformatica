

let dificuldade = sessionStorage.getItem("dificuldade");

let valorPontuacao = 0

let numeroPergunta = 0

//#region Perguntas

const pergunta1 = {
    pergunta: "O que é hardware?",
    respostas: ["A parte que se faz pesquisas no computador","A parte do controle lógico do computador","A parte física do computador","Um aplicativo que acelera o funcionamento"],
    respostaCerta: 3
}

const pergunta2 = {
    pergunta: "O que é Sofware?",
    respostas: ["São periféricos do computador","Conjunto de componentes lógicos do computador","É uma peça utilizada na montagem do computador","É um tipo de vírus"],
    respostaCerta: 2
}

const pergunta3 = {
    pergunta: "Qual atalho utilizado para copiar e colar?",
    respostas: ["Crtl+A - Ctrl+T","Alt+C - Alt+V","Ctrl+Z - Ctrl+X","Ctrl+C - Ctrl+V"],
    respostaCerta: 4
}

const pergunta4 = {
    pergunta: "O que é um computador?",
    respostas: ["É uma máquina que é destinada ao processamento de dados","É um dispositivo feito somente para entretenimento","É um programa utilizado para fazer pesquisas acadêmicas","É uma máquinaa utilizada paara tirar fotos"],
    respostaCerta: 1
}

const pergunta5 = {
    pergunta: "Quais são as etapas do algoritmo?",
    respostas: ["Cálculos e saída de informação","Adição, subtração, divisão e multiplicação","Entrada de dados, processamento e saída de dados","Ligar, abrir e desligar"],
    respostaCerta: 3
}

const pergunta6 = {
    pergunta: "Quais desses NÃO é um Software?",
    respostas: ["Winrar","Teclado","Google Chrome","Spotify"],
    respostaCerta: 2
}

const pergunta7 = {
    pergunta: "Quais desses NÃO é um Hardware?",
    respostas: ["Teclado","Placa Mãe","SSD","Windows"],
    respostaCerta: 4
}

const pergunta8 = {
    pergunta: "Qual destes NÃO é um componente de computador?",
    respostas: ["Fone","CPU","Placa Mãe","Memória RAM"],
    respostaCerta: 1
}

const pergunta9 = {
    pergunta: "Qual desses NÃO é um tipo de dado?",
    respostas: ["Caractere","Nome","Inteiro","Booleano"],
    respostaCerta: 2
}

const pergunta10 = {
    pergunta: "Qual o tipo de informação que o computador interpreta?",
    respostas: ["Decimal","Octal","Binário","Hexadecimal"],
    respostaCerta: 3
}

const pergunta11 = {
    pergunta: "Quais são as peças essenciais de um computador?",
    respostas: ["Processador, Placa de vídeo, Fonte de alimentação e memória",
        "Placa mãe, Processador, Armazenamento, Memória, Fonte de alimentação",
        "Fonte de alimentação, Placa de vídeo, Gabinete e armazenamento",
        "Mouse, Teclado, Placa de vídeo, ventoinha e fonte de alimentação"],
    respostaCerta: 2
}

const pergunta12 = {
    pergunta: "O que é uma variável?",
    respostas: [
        "É um espaço que recebe um valor que não se altera",
        "É um número prefixo",
        "É um valor onde será usado diversas vezes no calculado, que não tem alteração",
        "É um espaço na memória feito para receber valores"
    ],
    respostaCerta: 4
}

const pergunta13 = {
    pergunta: "O que é memória RAM?",
    respostas: [
        "É uma memória fixa que armazena os arquivos baixados do computador",
        "É uma memória fixa do computador que guarda as informações importantes",
        "É uma memória volátil que organiza as informações que precisam ser acessadas rapidamente",
        "É um espaço na memória do disco feita para guardar informações rápidas"
    ],
    respostaCerta: 3
}

const pergunta14 = {
    pergunta: "O que é a memória ROM?",
    respostas: [
        "É uma memória volátil onde se guarda aplicativos abertos",
        "É uma memória fixa que tem os dados de inicialização do computador gravados",
        "É a memória que o processador usa para fazer contas",
        "É a memória que é usada para baixar arquivos"
    ],
    respostaCerta: 2
}

const pergunta15 = {
    pergunta: "O que é um sistema operacional?",
    respostas: [
        "É o programa que faz a conexão do hardware e do software",
        "É um programa que abre imagens",
        "É um gerenciador de arquivos",
        "É uma forma de programação"
    ],
    respostaCerta: 1
}

const pergunta16 = {
    pergunta: "O que é uma matriz?",
    respostas: [
        "Um processo que pode ser feito para acessar a cmd do computador",
        "A aba principal de um navegador Chrome",
        "Estrutura que armazena variáveis do mesmo tipo, acessíveis com um único nome.",
        "Um dos principais aplicativos que já vêm pré-instalados na máquina"
    ],
    respostaCerta: 3
}

const pergunta17 = {
    pergunta: "O que é CMD?",
    respostas: [
        "Matriz Desenvolvida do Computador",
        "Matriz Computacional Dominante",
        "Central Matemático Desenvolvido",
        "Prompt de Comando"
    ],
    respostaCerta: 4
}

const pergunta18 = {
    pergunta: "O que é um Mainframe?",
    respostas: [
        "É uma peça que do hardware que transita informações entre os componentes",
        "Um local onde são armazenadas variáveis de um mesmo tipo",
        "É um computador de alto desempenho",
        "Software utilizado para gerenciar tarefas de forma rápida e eficiente"
    ],
    respostaCerta: 3
}

const pergunta19 = {
    pergunta: "O que é virtualização?",
    respostas: [
        "É um processo que permite  compartilhar seu hardware com ambientes separados digitalmente",
        "Foi o processo de evolução dos componentes do hardware do computador",
        "Ligar-se na internet a fim de ter interações com outros usuários ao redor do mundo",
        "Uma corrente virtualizada do hardware com o software"
    ],
    respostaCerta: 1
}

const pergunta20 = {
    pergunta: "O que é HTML?",
    respostas: [
        "Ele administra as tarefas que serão realizadas no computador de forma compactada",
        "É uma linguagem de marcação utilizada na construção de páginas na Web",
        "É uma sigla para “Hardware Transmission and Management Layer”",
        "Um processo do computador para abrir arquivos localizados dentro de pastas"
    ],
    respostaCerta: 2
}

//#endregion

const listaPerguntasFacil = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5,pergunta6,pergunta7,pergunta8,pergunta9,pergunta10];
const listaPerguntasDificil = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5,pergunta6,pergunta7,pergunta8,pergunta9,pergunta10,pergunta11,pergunta12,pergunta13,pergunta14,pergunta15,pergunta16,pergunta17,pergunta18,pergunta19,pergunta20];

let listaPerguntas = []

if (dificuldade==="facil") {
    listaPerguntas = listaPerguntasFacil;
}
else {
    listaPerguntas = listaPerguntasDificil;
}

const btnProximaPergunta = document.getElementById("btnProximaPergunta");
// btnProximaPergunta.style.display="none";


const pergunta = document.getElementById("pergunta")
const btnResposta1 = document.getElementById("btnResposta1");
const btnResposta2 = document.getElementById("btnResposta2");
const btnResposta3 = document.getElementById("btnResposta3");
const btnResposta4 = document.getElementById("btnResposta4");

const textoNumeroPergunta = document.getElementById("numeroPergunta");

window.onload = function() {
    novaPergunta()
}

const quantidadePerguntas = listaPerguntas.length;

let ultimaPergunta=false

let proximaPergunta = undefined

function novaPergunta() {
    if (ultimaPergunta==false) {

        let indiceSorteado = Math.floor(Math.random() * listaPerguntas.length)
        proximaPergunta = listaPerguntas[indiceSorteado]

        listaPerguntas.splice(indiceSorteado,1);

        pergunta.innerHTML=proximaPergunta["pergunta"]
        btnResposta1.innerHTML=proximaPergunta["respostas"][0]
        btnResposta2.innerHTML=proximaPergunta["respostas"][1]
        btnResposta3.innerHTML=proximaPergunta["respostas"][2]
        btnResposta4.innerHTML=proximaPergunta["respostas"][3]

        numeroPergunta+=1;
        textoNumeroPergunta.innerHTML= numeroPergunta + "/" + quantidadePerguntas

        for (botao of listaBotoesRespostas) {
            botao.style.backgroundColor="rgba(25, 205, 205, 0.15)";
        }

        btnProximaPergunta.style.display="none";

        if (listaPerguntas.length===0) {
            btnProximaPergunta.innerHTML="Finalizar Quiz"
            ultimaPergunta=true
            
        }
    }
    else {
        sessionStorage.setItem("pontuacao",valorPontuacao);
        window.location.href="../telaFinal/telaFinal.html"
    }
}

const listaBotoesRespostas = [btnResposta1,btnResposta2,btnResposta3,btnResposta4]

const pontuacao = document.getElementById("pontuacao")

function responder(botaoCLicado) {

    let valorBotaoClicado = botaoCLicado.value;

    if (valorBotaoClicado==proximaPergunta["respostaCerta"]) {
        valorPontuacao+=100
        pontuacao.innerHTML="Pontuação: "+valorPontuacao

    }
    for (let botao of listaBotoesRespostas) {
        if (botao.value==proximaPergunta["respostaCerta"]) {
            botao.style.backgroundColor="green";
        }
        else {
            botao.style.backgroundColor="red";
        }
    }

    btnProximaPergunta.style.display="block";

}