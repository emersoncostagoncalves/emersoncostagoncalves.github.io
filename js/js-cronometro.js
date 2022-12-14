const btnIniciar = document.querySelector(".play");
const btnReset = document.querySelector(".reset");
const animation = document.querySelector(".color");

const display = document.querySelector(".display-numbers")

let iniciado = false;
let horas = 0
let segundos = 0
let minutos = 0
let segFormat;
let minFormat;
let hFormat;
const tempo = new Date();



console.log(btnIniciar, btnReset, display)



function cronometro() {
    segundos ++;
    tempo.setHours(horas, minutos, segundos)
    
    segFormat = (tempo.getSeconds() < 10) ? ":0" + tempo.getSeconds() : ":" + tempo.getSeconds();
        minFormat = (tempo.getMinutes() < 10) ? ":0" + tempo.getMinutes() : ":" + tempo.getMinutes()
        hFormat = (tempo.getHours() < 10) ? "0" + tempo.getHours() : tempo.getHours()
    

    display.innerText = hFormat + minFormat + segFormat
}


function iniciar() {
    
    if (!iniciado){
        if(segundos === 0){
            segundos++
        }
        
        tempo.setHours(horas, minutos, segundos)
        segFormat = (tempo.getSeconds() < 10) ? ":0" + tempo.getSeconds() : ":" + tempo.getSeconds();
        minFormat = (tempo.getMinutes() < 10) ? ":0" + tempo.getMinutes() : ":" + tempo.getMinutes()
        hFormat = (tempo.getHours() < 10) ? "0" + tempo.getHours() : tempo.getHours()
    
        display.innerText = hFormat + minFormat + segFormat

        this.intervalo = setInterval(cronometro, 1000)
        
        btnIniciar.innerText = "Pausar"
        animation.style.animationName = "cor"
        iniciado = true
        console.log(iniciado)
    }else {
        clearInterval(intervalo)
        btnIniciar.innerText = "Iniciar"
        animation.style.animationName = ""
        
        iniciado = false
        console.log(iniciado)
    }
            
        

}

function resetar() {

    if (!iniciado) {
        clearInterval(intervalo)
        btnIniciar.innerText = "Iniciar"
        segundos = 0;
        display.innerText = "00:00:00"
        
    } else {
        btnIniciar.innerText = "Pausar"
        segundos = 0;
        display.innerText = "00:00:00"
    }
}


btnIniciar.onclick = (e) => {

    iniciar()
    
}


btnReset.onclick = () => {
    resetar();
}

