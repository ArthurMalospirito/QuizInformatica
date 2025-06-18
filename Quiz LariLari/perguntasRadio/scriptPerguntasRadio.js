
//Pegando valor de dificuldade da outra tela
let dificuldade = sessionStorage.getItem("dificuldade");

//Definindo a pontuação
let valorPontuacao = 0

//Definindo o número da pergunta
let numeroPergunta = 0

//Defindindo se a resposta foi feita (Começa True para aleatorizar a pergunta)
let respondeu = true

let radioSelecionado = "0"

//Todas as perguntas feitas em dicionários
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

//Listas com perguntas fáceis
const listaPerguntasFacil = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5,pergunta6,pergunta7,pergunta8,pergunta9,pergunta10];
//Lista com perguntas difíceis
const listaPerguntasDificil = [pergunta1,pergunta2,pergunta3,pergunta4,pergunta5,pergunta6,pergunta7,pergunta8,pergunta9,pergunta10,pergunta11,pergunta12,pergunta13,pergunta14,pergunta15,pergunta16,pergunta17,pergunta18,pergunta19,pergunta20];

//Lista de perguntas que serão usadas
let listaPerguntas = []

//Código para escolher as perguntas baseadas na dificuldade
if (dificuldade==="facil") {
    listaPerguntas = listaPerguntasFacil;
}
else {
    listaPerguntas = listaPerguntasDificil;
}

//Definindo o botão da próxima pergunta (Botão de interação principal)
const btnProximaPergunta = document.getElementById("btnProximaPergunta");
btnProximaPergunta.style.display="block";

//Definindo o h1 da pontuação
const pontuacao = document.getElementById("pontuacao")

//Definindo o h2 daa pergunta
const pergunta = document.getElementById("pergunta")

//Definindo as labels das respostas
const labelResposta1 = document.getElementById("labelResposta1");
const labelResposta2 = document.getElementById("labelResposta2");
const labelResposta3 = document.getElementById("labelResposta3");
const labelResposta4 = document.getElementById("labelResposta4");

//Definindo os inputs radio das respostas
const input1 = document.getElementById("inputResposta1");
const input2 = document.getElementById("inputResposta2");
const input3 = document.getElementById("inputResposta3");
const input4 = document.getElementById("inputResposta4");
const listaInputs = [input1,input2,input3,input4]

//Definindo os fields de cada resposta
const fieldResposta1 = document.getElementById("fieldResposta1");
const fieldResposta2 = document.getElementById("fieldResposta2");
const fieldResposta3 = document.getElementById("fieldResposta3");
const fieldResposta4 = document.getElementById("fieldResposta4");
const listaFieldResposta = [fieldResposta1,fieldResposta2,fieldResposta3,fieldResposta4]


//Definindo o p que mostra o contador da pergunta.
const textoNumeroPergunta = document.getElementById("numeroPergunta");

//fazendo a tela se aleatorizar quando abrir
window.onload = function() {
    novaPergunta()
}

//Mostrando a quantidade total de perguntas
const quantidadePerguntas = listaPerguntas.length;

//Definindo variável que mostra se é a última pergunta
let ultimaPergunta=false

//Função que se aplica quando clica no botão de interagir
function botaoInteragir() {
    //Verificação da ultima pergunta para mudar a tela nela
    if (ultimaPergunta==false) {
        //Verificando se a resposta foi marcada para mudar de tela
        if (respondeu===false) {

            //Adicionando pontos caso marcar a resposta certa
            if (radioSelecionado==proximaPergunta["respostaCerta"]) {
                valorPontuacao+=100
                pontuacao.innerHTML="Pontuação: "+valorPontuacao
            }

            //Mudando a cor dos fieldsets para mostrar a resposta certa
            for (let i=0;i<listaFieldResposta.length;i++) {
                if (i+1===proximaPergunta["respostaCerta"]) {
                    listaFieldResposta[i].style.backgroundColor="green";
                }
                else {
                    listaFieldResposta[i].style.backgroundColor="red";
                }

          
            }
            //Definindo que o usuário já marcou uma resposta
            respondeu=true
            //Mudando o texto do botão
            btnProximaPergunta.innerHTML="Próxima Pergunta";
            //Mudando o texto de forma diferente para difenciar a últiam pergunta 
            if (listaPerguntas.length===0) {
                btnProximaPergunta.innerHTML="Finalizar Quiz"
                ultimaPergunta=true
            }

        }
        //Condição para caso o usuário já tenha respondido
        else {
            btnProximaPergunta.innerHTML="Enviar Resposta";
            novaPergunta()
            

        }
    }
    //Condição paraa se for aa última pergunta
    else {
        //enviando os dados para a tela final e enviando o usuário para ela
        sessionStorage.setItem("pontuacao",valorPontuacao);
        window.location.href="../telaFinal/telaFinal.html"
    }
}

//Definindo a variável que representa a próxima pergunta
let proximaPergunta = undefined

//Função de renovar pergunta
function novaPergunta() {

        //Aleatorizando a proxima pergunta e atribuindo ela em uma variável
        let indiceSorteado = Math.floor(Math.random() * listaPerguntas.length)
        proximaPergunta = listaPerguntas[indiceSorteado]

        //Retirando a pergunta escolhida da lista de perguntas para não repetir
        listaPerguntas.splice(indiceSorteado,1);

        //mudando os textos das perguntas e respostas
        pergunta.innerHTML=proximaPergunta["pergunta"]
        labelResposta1.innerHTML=proximaPergunta["respostas"][0]
        labelResposta2.innerHTML=proximaPergunta["respostas"][1]
        labelResposta3.innerHTML=proximaPergunta["respostas"][2]
        labelResposta4.innerHTML=proximaPergunta["respostas"][3]

        //Aumentando o número da pergunta e alterando o valor do p
        numeroPergunta+=1;
        textoNumeroPergunta.innerHTML= numeroPergunta + "/" + quantidadePerguntas

        //Mudando a cor de fundo dos fieldsets para cor padrão
        for (let field of listaFieldResposta) {
            field.style.backgroundColor="rgba(25, 205, 205, 0.15)";
        }

        //Mudando todos os inputs para não estarem mais marcados
        for (let input of listaInputs) {
            input.checked = false;
        }

        //definindo que o usuário ainda não respondeu essa pergunta
        respondeu=false

}

//Função que altera qual radio foi selecionado para verificar a resposta
function mudarSelecionado(botaoClicado) {

    radioSelecionado=botaoClicado.value;

}

//definindo o form
const form = document.getElementById("formPergunta")

//Função que não reinicia a página caso envie o formulário, para o JS funcionar
form.addEventListener("submit", function(event) {
    event.preventDefault();
})