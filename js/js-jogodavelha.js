// telas Game

const tela1 = document.querySelector(".tela-1");
const tela2 = document.querySelector(".tela-2");
const tela3 = document.querySelector(".tela-3");

const btnIniciar = document.querySelector(".btn-jogar")
const btnAgain = document.querySelector(".btn-again")


tela1.style.display = "flex"
tela2.style.display = "none"
tela3.style.display = "none";

const jogadaVez = document.querySelector(".jogada-vez")
const resultado = document.querySelector(".resultado")

btnIniciar.onclick = () => {
    tela1.style.display = "none"
    iniciarJogo()
}

btnAgain.onclick = () => {
    tela3.style.display = "none"
    
    iniciarJogo()
}

function iniciarJogo() {
    tela2.style.display = "flex"

    // Quadrados do Game
    const q1 = document.querySelector(".q1");
    const q2 = document.querySelector(".q2");
    const q3 = document.querySelector(".q3");
    const q4 = document.querySelector(".q4");
    const q5 = document.querySelector(".q5");
    const q6 = document.querySelector(".q6");
    const q7 = document.querySelector(".q7");
    const q8 = document.querySelector(".q8");
    const q9 = document.querySelector(".q9");

    q1.innerHTML = "";
    q2.innerHTML = "";
    q3.innerHTML = "";
    q4.innerHTML = "";
    q5.innerHTML = "";
    q6.innerHTML = "";
    q7.innerHTML = "";
    q8.innerHTML = "";
    q9.innerHTML = "";




    let circulo = '<img class="circulo" src="icones/circulo.svg" width="120px" alt="circulo">'
    let x = '<img class="x" src="icones/x.svg" width="100px" alt="x">'


    let campo1 = "vazio";
    let campo2 = "vazio";
    let campo3 = "vazio";
    let campo4 = "vazio";
    let campo5 = "vazio";
    let campo6 = "vazio";
    let campo7 = "vazio";
    let campo8 = "vazio";
    let campo9 = "vazio";
    let jogadas = 9;
    let final = false;
    let rodada = false;
    //
    let linha1 = [];
    let linha2 = [];
    let linha3 = [];
    let coluna1 = [];
    let coluna2 = [];
    let coluna3 = [];
    let cruzado1 = [];
    let cruzado2 = [];
    //

    resultado.innerText = "";

    console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9)

    // Sorteia quem começa
    function comecar() {
        const numero = Math.floor(Math.random() * 2)
        console.log("Quem começa" + numero)
        if (numero == 0) {
            circulo = '<img class="circulo" src="icones/circulo.svg" width="120px" alt="circulo">'
            x = '<img class="x" src="icones/x.svg" width="100px" alt="x">'
            jogadaVez.innerText = "Sua vez de jogar..."
            rodada = true;
        } else {
            circulo = '<img class="x" src="icones/x.svg" width="100px" alt="x">'
            x = '<img class="circulo" src="icones/circulo.svg" width="120px" alt="circulo">'

            jogadaVez.innerText = "Vez do bot..."
            setTimeout(() => {
                Bot()
            }, 1500)

        }
    }

    comecar();

    /// funções ao clicar


    setInterval(() => {
        
        if (rodada) {
            jogadaVez.innerText = "Sua vez de jogar..."
        } else {
            jogadaVez.innerText = "Vez do bot..."
        }
        //
        
    })

    q1.onclick = () => {
        if (campo1 == "vazio" && rodada == true) {
            q1.innerHTML = circulo;
            campo1 = "user";
            linha1.push(1);
            coluna1.push(1);
            cruzado1.push(1);
            jogadas -= 1;
            rodada = false;
            vitoria()
            setTimeout(() => {
                AI();
            }, 1500)

        }


        console.log(campo1)

    }

    q2.onclick = () => {
        if (campo2 == "vazio" && rodada == true) {
            q2.innerHTML = circulo;
            campo2 = "user";
            linha1.push(1);
            coluna2.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }

        console.log(campo2)

    }

    q3.onclick = () => {
        if (campo3 == "vazio" && rodada == true) {
            q3.innerHTML = circulo;
            campo3 = "user";
            linha1.push(1);
            coluna3.push(1);
            cruzado2.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }
        console.log(campo3)

    }

    q4.onclick = () => {
        if (campo4 == "vazio" && rodada == true) {
            q4.innerHTML = circulo;
            campo4 = "user";
            linha2.push(1);
            coluna1.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }

        console.log(campo4)

    }
    q5.onclick = () => {
        if (campo5 == "vazio" && rodada == true) {
            q5.innerHTML = circulo;
            campo5 = "user";
            linha2.push(1);
            coluna2.push(1);
            cruzado1.push(1);
            cruzado2.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }

        console.log(campo5)

    }
    q6.onclick = () => {
        if (campo6 == "vazio" && rodada == true) {
            q6.innerHTML = circulo;
            campo6 = "user";
            linha2.push(1);
            coluna3.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }

        console.log(campo6)

    }
    q7.onclick = () => {
        if (campo7 == "vazio" && rodada == true) {
            q7.innerHTML = circulo;
            campo7 = "user";
            linha3.push(1);
            coluna1.push(1);
            cruzado2.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }

        console.log(campo7)
    }
    q8.onclick = () => {
        if (campo8 == "vazio" && rodada == true) {
            q8.innerHTML = circulo;
            campo8 = "user";
            linha3.push(1);
            coluna2.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }

        console.log(campo8)
    }
    q9.onclick = () => {
        if (campo9 == "vazio" && rodada == true) {
            q9.innerHTML = circulo;
            campo9 = "user";
            linha3.push(1);
            coluna3.push(1);
            cruzado1.push(1);
            vitoria()
            jogadas -= 1;
            rodada = false;

            setTimeout(() => {
                AI();
            }, 1500)
        }
        console.log(campo9)

    }

    // I.A


    function Bot() {
        const bot = Math.floor(Math.random() * 10);
        console.log("Bot Numero: " + bot)
        console.log("Jogadas restantes: " + jogadas)


        if (jogadas != 0 && final == false) {

            if (bot == 1 && campo1 == "vazio") {
                q1.innerHTML = x;
                campo1 = "bot";
                linha1.push(3);
                coluna1.push(3);
                cruzado1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;

            } else if (bot == 2 && campo2 == "vazio") {
                q2.innerHTML = x;
                campo2 = "bot";
                linha1.push(3);
                coluna2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (bot == 3 && campo3 == "vazio") {
                q3.innerHTML = x;
                campo3 = "bot";
                linha1.push(3);
                coluna3.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (bot == 4 && campo4 == "vazio") {
                q4.innerHTML = x;
                campo4 = "bot";
                linha2.push(3);
                coluna1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (bot == 5 && campo5 == "vazio") {
                q5.innerHTML = x;
                campo5 = "bot";
                linha1.push(3);
                coluna2.push(3);
                cruzado1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (bot == 6 && campo6 == "vazio") {
                q6.innerHTML = x;
                campo6 = "bot";
                linha2.push(3);
                coluna3.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (bot == 7 && campo7 == "vazio") {
                q7.innerHTML = x;
                campo7 = "bot";
                linha3.push(3);
                coluna1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (bot == 8 && campo8 == "vazio") {
                q8.innerHTML = x;
                campo8 = "bot";
                linha3.push(3);
                coluna2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (bot == 9 && campo9 == "vazio") {
                q9.innerHTML = x;
                campo9 = "bot";
                linha3.push(3);
                coluna3.push(3);
                cruzado1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else {
                AI();
            }
        }
    }

    // A.I 2

    function AI() {

        if(final != true){
        if (linha1.reduce((a = 0, v) => a + v, 0) == 6 || linha1.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo1 == "vazio") {
                q1.innerHTML = x;
                campo1 = "bot";
                linha1.push(3);
                coluna1.push(3);
                cruzado1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo2 == "vazio") {
                q2.innerHTML = x;
                campo2 = "bot";
                linha1.push(3);
                coluna2.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo3 == "vazio") {
                q3.innerHTML = x;
                campo3 = "bot";
                linha1.push(3);
                coluna3.push(3)
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            }
        } else if (linha2.reduce((a = 0, v) => a + v, 0) == 6 || linha2.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo4 == "vazio") {
                q4.innerHTML = x;
                campo4 = "bot";
                linha2.push(3);
                coluna1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo5 == "vazio") {
                q5.innerHTML = x;
                campo5 = "bot";
                linha2.push(3);
                coluna2.push(3)
                cruzado1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo6 == "vazio") {
                q6.innerHTML = x;
                campo6 = "bot";
                linha2.push(3);
                coluna3.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            }
        } else if (linha3.reduce((a = 0, v) => a + v, 0) == 6 || linha3.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo7 == "vazio") {
                q7.innerHTML = x;
                campo7 = "bot";
                linha3.push(3);
                coluna1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo8 == "vazio") {
                q8.innerHTML = x;
                campo8 = "bot";
                linha3.push(3);
                coluna2.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo9 == "vazio") {
                q9.innerHTML = x;
                campo9 = "bot";
                linha3.push(3);
                coluna3.push(3)
                cruzado1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            }

        } else if (coluna1.reduce((a = 0, v) => a + v, 0) == 6 || coluna1.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo1 == "vazio") {
                q1.innerHTML = x;
                campo1 = "bot";
                linha1.push(3);
                coluna1.push(3);
                cruzado1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo4 == "vazio") {
                q4.innerHTML = x;
                campo4 = "bot";
                linha2.push(3);
                coluna1.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo7 == "vazio") {
                q7.innerHTML = x;
                campo7 = "bot";
                linha3.push(3);
                coluna1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            }
        } else if (coluna2.reduce((a = 0, v) => a + v, 0) == 6 || coluna2.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo2 == "vazio") {
                q2.innerHTML = x;
                campo2 = "bot";
                linha1.push(3);
                coluna2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo5 == "vazio") {
                q5.innerHTML = x;
                campo5 = "bot";
                linha2.push(3);
                coluna2.push(3)
                cruzado1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo8 == "vazio") {
                q8.innerHTML = x;
                campo8 = "bot";
                linha3.push(3);
                coluna2.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            }
        } else if (coluna3.reduce((a = 0, v) => a + v, 0) == 6 || coluna3.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo3 == "vazio") {
                q3.innerHTML = x;
                campo3 = "bot";
                linha1.push(3);
                coluna3.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo6 == "vazio") {
                q6.innerHTML = x;
                campo6 = "bot";
                linha2.push(3);
                coluna3.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo9 == "vazio") {
                q9.innerHTML = x;
                campo9 = "bot";
                linha3.push(3);
                coluna3.push(3);
                cruzado1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            }
        } else if (cruzado1.reduce((a = 0, v) => a + v, 0) == 6 || cruzado1.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo1 == "vazio") {
                q1.innerHTML = x;
                campo1 = "bot";
                linha1.push(3);
                coluna1.push(3);
                cruzado1.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo5 == "vazio") {
                q5.innerHTML = x;
                campo5 = "bot";
                linha2.push(3);
                coluna2.push(3);
                cruzado1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo9 == "vazio") {
                q9.innerHTML = x;
                campo9 = "bot";
                linha3.push(3);
                coluna3.push(3);
                cruzado1.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            }
        } else if (cruzado2.reduce((a = 0, v) => a + v, 0) == 6 || cruzado2.reduce((a = 0, v) => a + v, 0) == 2) {
            if (campo3 == "vazio") {
                q3.innerHTML = x;
                campo3 = "bot";
                linha1.push(3);
                coluna3.push(3);
                cruzado2.push(3)
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo5 == "vazio") {
                q5.innerHTML = x;
                campo5 = "bot";
                linha2.push(3);
                coluna2.push(3);
                cruzado1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            } else if (campo7 == "vazio") {
                q7.innerHTML = x;
                campo7 = "bot";
                linha3.push(3);
                coluna1.push(3);
                cruzado2.push(3);
                vitoria()
                jogadas -= 1;
                rodada = true;
            }
        } else {
            Bot();
        }
    }
    }

    // Fim de jogo 

    function vitoria() {
        console.log("Linha 1: " + linha1)
        setTimeout(() => {
            console.log("Jogadas restantes: " + jogadas)
            if (jogadas >= 0 && final == false) {
                if (campo1 == "user" && campo2 == "user" && campo3 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo1 == "bot" && campo2 == "bot" && campo3 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                } else if (campo1 == "user" && campo5 == "user" && campo9 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo1 == "bot" && campo5 == "bot" && campo9 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                } else if (campo1 == "user" && campo4 == "user" && campo7 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo1 == "bot" && campo4 == "bot" && campo7 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                } else if (campo2 == "user" && campo5 == "user" && campo8 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo2 == "bot" && campo5 == "bot" && campo8 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                }
                else if (campo3 == "user" && campo6 == "user" && campo9 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo3 == "bot" && campo6 == "bot" && campo9 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                } else if (campo4 == "user" && campo5 == "user" && campo6 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo4 == "bot" && campo5 == "bot" && campo6 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                } else if (campo3 == "user" && campo5 == "user" && campo7 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo3 == "bot" && campo5 == "bot" && campo7 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                } else if (campo7 == "user" && campo8 == "user" && campo9 == "user") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ VENCEU!"
                    final = true;
                } else if (campo7 == "bot" && campo8 == "bot" && campo9 == "bot") {
                    tela3.style.display = "flex"
                    resultado.innerText = "VOCÊ PERDEU!"
                    final = true;
                } else if (jogadas == 0 && final == false) {
                    resultado.innerText = "EMPATE!"
                    tela3.style.display = "flex"
                }
            }

        }, 1000)

    }



}
