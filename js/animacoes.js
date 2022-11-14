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
       