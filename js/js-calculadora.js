
// Botões sub destaque
const bntLimpar = document.querySelector("#bnt-apagar");
const bntCopiar = document.querySelector("#bnt-copiar");
const bntPorcento = document.querySelector("#bnt-porcento");


// Botões de Operação
const bntSoma = document.querySelector("#bnt-add")
const bntSub = document.querySelector("#bnt-sub")
const bntIgual = document.querySelector("#bnt-igual")
const bntDividir = document.querySelector("#bnt-dividir")
const bntMultiplicar = document.querySelector("#bnt-mult")
const bntMaisMenos = document.querySelector("#bnt-mais-menos")
const bntVirgula = document.querySelector("#bnt-virgula")


// Botões de Mensagem
const bntSim = document.querySelector("#bnt-sim")
const bntNao = document.querySelector("#bnt-nao")


// Botões Numéricos
const botoes = document.querySelectorAll(".botoes.n")

// Visores
const visorOperacao = document.querySelector(".operacao")
const visorNumero = document.querySelector(".op-numero")
const historico = document.querySelector(".historico")
const bntHistorico = document.querySelector(".bnt-historico")

// Popup Mensagem
const mensagens = document.querySelector(".mensagens")
mensagens.style.display = "none"

// Visor apagados
visorOperacao.innerText = ""
visorNumero.innerText = ""

// Chaves Condições
let chaveHistorico = false;
let chaveBotoes = false;
let chaveNumeros = true;
let alternaNumero = true;
let chaveCopiar = false;


// Variaveis de armazenamento

let numero1 = [];
const numero2 = [];
const guardaN = [];
let resultadoParcial = []
let operacaoFinal = []
let resultado = [];


historico.style.display = "flex"


function Operacao(numero1, operacao, numero2){
    const parcial = [];
    parcial.push(numero1);
    parcial.push(operacao)
    parcial.push(numero2)

    return eval(parcial.join(""))

}

console.log(Operacao("15","+","2"))


bntHistorico.onclick = () => {
    if(historico.style.display == "flex"){
        historico.style.display = "none"
    }else{
        historico.style.display = "flex"
    }
    
} 



botoes.forEach(e => {
    
    e.onclick = () => {
        //chaveBotoes = true;
        if(chaveNumeros){
            chaveBotoes = true;
            visorNumero.innerText = "";
            numero1.push(e.innerText)
            visorNumero.innerText = numero1.join(""); 
        }
        
    }
    }
    )



//Funções

function Porcentagem() {
    return parseInt(visorOperacao.innerText,10) / 100 * visorNumero.innerText
}

function soma(arr) {
    return arr.reduce((a, v) => Number(a) + Number(v))
}


function Subtrair(arr) {
    let resultado = arr[0] * 2;
    for (let i in arr) {
        resultado -= arr[i]
    }
    return resultado;
}


function Dividir(arr) {
    return arr.reduce((a, v) => a / v)
}

function Multiplicar(arr) {
    return arr.reduce((a, v) => a * v)
}

// Funções ao clicar

bntSim.onclick = () => {
    historico.innerHTML = "";
    mensagens.style.display = "none"
    chaveHistorico = false;
}

bntNao.onclick = () => {
    mensagens.style.display = "none"
}


bntLimpar.onclick = () => {
    if(chaveHistorico){
        const elemento = document.createElement("div");
        elemento.className = "result-historico"
        elemento.innerHTML = `<p class="operacao-historico">${visorOperacao.innerText}</p>
        <p class="op-numero-historico">${visorNumero.innerText}</p>`
    
        historico.appendChild(elemento)

        chaveHistorico = false;
    }

    if(visorNumero.innerText == "" && historico.innerText != ""){

        mensagens.style.display = "flex"

        }
        

    visorNumero.innerText = "";
    visorOperacao.innerText = "";
    numero1 = [];
    resultadoParcial = [];
    operacaoFinal = [];
    resultado = [];
    
    chaveNumeros = true;
    chaveCopiar = false;

}

bntCopiar.onclick = () => {
if(chaveCopiar){
    navigator.clipboard.writeText(visorNumero.innerText)

}
}


bntPorcento.onclick = () => {
    
    if(chaveBotoes && visorNumero != ""){
    visorNumero.innerText = Porcentagem();
    numero1 = [];
    numero1.push(visorNumero.innerText)
    //numero1.push(visorOperacao.innerText);
    
    console.log("Numero1"+numero1)
    }
}

bntMaisMenos.onclick = () => {

    if(chaveNumeros){
    if (visorNumero.innerText.includes("-")) {
        numero1 = [];
        
        visorNumero.innerText = visorNumero.innerText.replace("-", "")
        numero1.push(visorNumero.innerText)
    } else {
        numero1 = [];
        visorNumero.innerText = `-${visorNumero.innerText}`
        numero1.push(visorNumero.innerText)
    }
}
}

bntVirgula.onclick = () => {

    if(chaveNumeros){
    if(visorNumero.innerText.includes(".") && visorNumero.innerText == ""){
        visorNumero.innerText = visorNumero.innerText;
    }else if(!visorNumero.innerText.includes(".") && !visorNumero.innerText == ""){
        visorNumero.innerText += ".";
        numero1.push(".");
        chaveBotoes = true;
    }
}
}


bntSub.onclick = () => {

    if(chaveBotoes){
        if(resultadoParcial.length > 1){
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("-")

            resultadoParcial.push(numero1.join(""));
            visorOperacao.innerText = Math.pow(Number(eval(resultadoParcial.join(""))).toFixed(2), 1)
            visorNumero.innerText = visorOperacao.innerText
            visorOperacao.innerText += "-"
            resultadoParcial.push("-");
            
            
        }else{
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("-")
            resultadoParcial.push(numero1.join(""));
            resultadoParcial.push("-");

            visorOperacao.innerText = resultadoParcial.join("")
            
        }
        numero1 = [];
        chaveBotoes = false;
        chaveNumeros = true;
        console.log(numero1)
        }
}



bntSoma.onclick = () => {
    if(chaveBotoes){
        if(resultadoParcial.length > 1){
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("+")
            resultadoParcial.push(numero1.join(""));
            visorOperacao.innerText = Math.pow(Number(eval(resultadoParcial.join(""))).toFixed(2), 1)
            visorNumero.innerText = visorOperacao.innerText
            visorOperacao.innerText += "+"
            resultadoParcial.push("+");
            
            
        }else{
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("+")
            resultadoParcial.push(numero1.join(""));
            resultadoParcial.push("+");

            visorOperacao.innerText = resultadoParcial.join("")
            
        }
        numero1 = [];
        chaveBotoes = false;
        chaveNumeros = true;
        console.log(numero1)
        }
}


bntDividir.onclick = () => {

    if(chaveBotoes){
        if(resultadoParcial.length > 1){
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("/")
            resultadoParcial.push(numero1.join(""));
            
            visorOperacao.innerText = Math.pow(Number(eval(resultadoParcial.join(""))).toFixed(2), 1)

            
            visorNumero.innerText = visorOperacao.innerText
            
            resultadoParcial = []
            resultadoParcial.push(visorOperacao.innerText)
            resultadoParcial.push("/");
            visorOperacao.innerText += "/"
            
            
        }else{
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("/")
            resultadoParcial.push(numero1.join(""));
            resultadoParcial.push("/");

            visorOperacao.innerText = resultadoParcial.join("")
            
        }
        numero1 = [];
        chaveBotoes = false;
        chaveNumeros = true;
        console.log(numero1)
        }
}

bntMultiplicar.onclick = () => {

    if(chaveBotoes){
        if(resultadoParcial.length > 1){
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("*")
            resultadoParcial.push(numero1.join(""));
            
            visorOperacao.innerText = Math.pow(Number(eval(resultadoParcial.join(""))).toFixed(2), 1)

            
            visorNumero.innerText = visorOperacao.innerText
            
            resultadoParcial = []
            resultadoParcial.push(visorOperacao.innerText)
            resultadoParcial.push("*");
            visorOperacao.innerText += "*"
            
            
        }else{
            operacaoFinal.push(numero1.join(""));
            operacaoFinal.push("*")
            resultadoParcial.push(numero1.join(""));
            resultadoParcial.push("*");

            visorOperacao.innerText = resultadoParcial.join("")
            
        }
        numero1 = [];
        chaveBotoes = false;
        chaveNumeros = true;
        console.log(numero1)
        }
}


bntIgual.onclick = () => {

    if(chaveBotoes){
    operacaoFinal.push(numero1.join(""));
    
    resultado.push(visorOperacao.innerText);
    resultado.push(visorNumero.innerText);
    visorOperacao.innerText = operacaoFinal.join("") + "="
    visorNumero.innerText = Math.pow(Number(eval(resultado.join(""))).toFixed(2), 1)
    numero1 = [];
    operacaoFinal = [];
    resultadoFinal = [];
    resultado = [];

    
    
    chaveHistorico = true;
    chaveBotoes = false;
    chaveNumeros = false;
    chaveCopiar = true;

    }

}


// teste elemento
console.log(bntHistorico)
setInterval(() =>
{
console.log("Copiar: "+chaveCopiar)

},10)



