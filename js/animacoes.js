const animacao = document.querySelector(".animar")
const bntTopo = document.querySelector(".bnt-topo")
bntTopo.style.display = "none"
const btnProjeto1 = document.querySelector("#projeto-1")
const btnProjeto2 = document.querySelector("#projeto-2")
const btnProjeto3 = document.querySelector("#projeto-3")
const btnProjeto4 = document.querySelector("#projeto-4")
const btnProjeto5 = document.querySelector("#projeto-5")
const btnProjeto6 = document.querySelector("#projeto-6")
const btnProjeto7 = document.querySelector("#projeto-7")
const redesSociais = document.querySelectorAll(".social-link")


redesSociais.forEach(el => {
    el.onclick = e => {
        e.preventDefault()
        window.open(el.href)
        console.log(el.href)
    }
})

btnProjeto1.onclick = e => {
    window.open("/calculadora.html")
}

btnProjeto2.onclick = e => {
    window.open("/meteorologia.html")
}
btnProjeto3.onclick = e => {
    window.open("/gkanban.html")
}
btnProjeto4.onclick = e => {
    window.open("/cronometro.html")
}
btnProjeto5.onclick = e => {
    window.open("/geradordesenha.html")
}
btnProjeto6.onclick = e => {
    window.open("/jogodavelha.html")
}

btnProjeto7.onclick = e => {
    window.open("/barraflix/index.html")
}






animacao.addEventListener("animationiteration", (e) => {
    
    const mudaTexto = document.querySelector(".animar > h1")
    if(e.animationName == "animar-texto"){
        if (mudaTexto.innerText == "Desenvolvedor.") {
            mudaTexto.innerText = "Designer Gráfico."
        } else {
            mudaTexto.innerText = "Desenvolvedor."
        }
    }
    
})



window.onscroll = () => {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        bntTopo.style.display = "flex"
    } else {
        bntTopo.style.display = "none"
    }
}

if (window.location.hash == "#sobre") {
    document.body.scrollTop -= 100;
}

