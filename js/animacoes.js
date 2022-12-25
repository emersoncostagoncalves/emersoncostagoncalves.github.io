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
const btnMenuMobile = document.querySelector(".btn-menu")
const checkMenuMobile = document.querySelector("#check-menu")
const btnMenu = document.querySelectorAll("nav > a")
const menuLateral = document.querySelector(".menu")
console.log(btnMenu)
let btnCheckd = false
let animationend = true;





window.onresize = e => {
    const menuLateral = document.querySelector(".menu")
    if (window.innerWidth <= 767) {
        menuLateral.style.display = "none";
        if (btnCheckd) {
            menuLateral.style.display = "flex"
        } else {
            menuLateral.style.display = "none"
        }
    } else {
        menuLateral.style.display = "flex";
    }
}


btnMenuMobile.onclick = () => {
    checkMenuMobile.checked = true;
    checkMenuMobile.disabled = true;

    if (animationend) {
        const menuLateral = document.querySelector(".menu")

        if (btnCheckd) {
            btnCheckd = false;
        } else {
            btnCheckd = true;
        }



        if (btnCheckd) {

            menuLateral.style.display = "flex"
            animationend = false;

            menuLateral.addEventListener("animationend", (e) => {
                if (e.animationName == "menu-slide") {
                    animationend = true;
                    //checkMenuMobile.checked = true;
                    console.log(checkMenuMobile.checked)
                    checkMenuMobile.checked = true;
                    checkMenuMobile.disabled = false;

                }

            })

        } else {
            
            checkMenuMobile.checked = false;
            checkMenuMobile.disabled = true;
            menuLateral.setAttribute("fadeout-menu", "")
            animationend = false;

            menuLateral.addEventListener("animationend", (e) => {
                if (e.animationName == "out-slide") {
                    animationend = true;
                    menuLateral.style.display = "none"
                    menuLateral.removeAttribute("fadeout-menu")
                    //checkMenuMobile.checked = false
                    console.log(checkMenuMobile.checked)
                    checkMenuMobile.checked = false;
                    checkMenuMobile.disabled = false;

                }

            })

        }
    }

}




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
    if (e.animationName == "animar-texto") {
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

