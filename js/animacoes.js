const animacao = document.querySelector(".animar")
const bntTopo = document.querySelector(".bnt-topo")
bntTopo.style.display = "none"
    
    const mudaTexto = document.querySelector(".animar > h1")
    

    console.log(animacao, mudaTexto.innerText, bntTopo, document.body.scrollTop )


    
    
    setInterval(() => {
        if(mudaTexto.innerText == "Desenvolvedor."){
            mudaTexto.innerText = "Designer Gráfico."
        }else{
            mudaTexto.innerText = "Desenvolvedor."
        }
        

        
console.log(document.body.scrollTop, document.documentElement.scrollTop)
    },4000)
    
       window.onscroll = () => {
        if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
            bntTopo.style.display = "flex"
        }else{
            bntTopo.style.display = "none"
        }
       }

       if(window.location.hash == "#sobre"){
        document.body.scrollTop -= 100;
       }
       
       /// animações ao rollar

       let slideUp = {
        distance: '150%',
        origin: 'bottom',
        opacity: 0
    };

    let slideRight = {
        distance: '150%',
        origin: 'right',
        opacity: 0
    };

    let slideLeft = {
        distance: '150%',
        origin: 'left',
        opacity: 0
    };

       ScrollReveal().reveal('.skills',slideUp);
       ScrollReveal().reveal('.experiencia',slideUp);
       ScrollReveal().reveal('.educacao',slideUp);
       ScrollReveal().reveal('.portifolio',slideUp);
       ScrollReveal().reveal('.contato',slideUp);

       ScrollReveal().reveal('.info',slideLeft);
       ScrollReveal().reveal('.sobre-mim > .foto',slideRight);