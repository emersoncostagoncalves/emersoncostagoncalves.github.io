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




console.log(btnIniciar, btnReset, display)

function cronometro() {


    const tempo = new Date();
    this.loop = setInterval(() => {

        segundos += 1;

        tempo.setHours(horas, minutos, segundos)

        segFormat = (tempo.getSeconds() < 10) ? ":0" + tempo.getSeconds() : ":" + tempo.getSeconds();
        minFormat = (tempo.getMinutes() < 10) ? ":0" + tempo.getMinutes() : ":" + tempo.getMinutes()
        hFormat = (tempo.getHours() < 10) ? "0" + tempo.getHours() : tempo.getHours()



        display.innerText = hFormat + minFormat + segFormat

    }, 1000)


}


btnIniciar.onclick = () => {
    if (!iniciado) {
        cronometro();
        iniciado = true;
        btnIniciar.innerText = "Pausar"
        animation.style.animationName = "cor"
    } else {
        clearInterval(loop)
        iniciado = false;
        btnIniciar.innerText = "Iniciar"
        animation.style.animationName = ""
    }
}

btnReset.onclick = () => {
    if(!iniciado){
        clearInterval(loop)
        btnIniciar.innerText = "Iniciar"
        segundos = 0;
        display.innerText = "00:00:00"
    }else{
        btnIniciar.innerText = "Pausar"
        segundos = 0;
        display.innerText = "00:00:00" 
    }
}

