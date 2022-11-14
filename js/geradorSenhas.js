const caracteres = "1234567890abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ@"
let senhaGerada = [];
let numeroRandom = (min=0, max) => Math.floor(Math.random() * (max - min) + min);

const numeroCaracteres = document.querySelector("#range-senha")
const bntAction = document.querySelector(".bnt-gerar")
const campoSenha = document.querySelector(".senha-gerada")
const nCharText = document.querySelector(".char-number-text")
const bntCopy = document.querySelector(".bnt-copy")

bntCopy.style.display = "none"

nCharText.innerText = `${numeroCaracteres.value} caracteres`

numeroCaracteres.onmousemove = () => {
    nCharText.innerText = `${numeroCaracteres.value} caracteres`
}


function senha(max){
    for(let i=0; i < max; i++){
senhaGerada.push(caracteres[numeroRandom(0,caracteres.length)])


    }
}

bntAction.onclick = () => {
    senha(numeroCaracteres.value);
    campoSenha.innerText = senhaGerada.join("")
    bntCopy.style.display = "block"
    senhaGerada = [];
    
}

bntCopy.onclick = () => {
    navigator.clipboard.writeText(campoSenha.innerText)
}



console.log(caracteres[caracteres.length-1])







