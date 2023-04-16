const animacao = document.querySelector(".animar");
const bntTopo = document.querySelector(".bnt-topo");
bntTopo.style.display = "none";
const btnProjeto1 = document.querySelector("#projeto-1");
const btnProjeto2 = document.querySelector("#projeto-2");
const btnProjeto3 = document.querySelector("#projeto-3");
const btnProjeto4 = document.querySelector("#projeto-4");
const btnProjeto5 = document.querySelector("#projeto-5");
const btnProjeto6 = document.querySelector("#projeto-6");
const btnProjeto7 = document.querySelector("#projeto-7");
const redesSociais = document.querySelectorAll(".social-link");
const btnMenuMobile = document.querySelector(".btn-menu");
const checkMenuMobile = document.querySelector("#check-menu");
const btnMenu = document.querySelectorAll("nav > a");
const menuLateral = document.querySelector(".menu");
//console.log(btnMenu)

const data = new Date();

const ano = document.querySelector(".ano");
ano.innerText = data.getFullYear();

let animationEnd = true;

window.onresize = (e) => {
  const menuLateral = document.querySelector(".menu");
  if (window.innerWidth <= 767) {
    menuLateral.style.display = "none";
    if (checkMenuMobile.checked) {
      menuLateral.style.display = "flex";
    } else {
      menuLateral.style.display = "none";
    }
  } else {
    menuLateral.style.display = "flex";
  }
};

btnMenuMobile.onclick = () => {
  if (!animationEnd) {
    checkMenuMobile.disabled = true;
  } else {
    checkMenuMobile.disabled = false;
  }
  if (animationEnd) {
    const menuLateral = document.querySelector(".menu");

    if (!checkMenuMobile.checked) {
      animationEnd = false;
      menuLateral.style.display = "flex";
      menuLateral.addEventListener("animationend", (e) => {
        if (e.animationName == "menu-slide") {
          checkMenuMobile.checked = true;
          animationEnd = true;
        }
      });
    } else {
      animationEnd = false;
      menuLateral.setAttribute("fadeout-menu", "");

      menuLateral.addEventListener("animationend", (e) => {
        if (e.animationName == "out-slide") {
          menuLateral.style.display = "none";
          menuLateral.removeAttribute("fadeout-menu");
          checkMenuMobile.checked = false;
          animationEnd = true;
        }
      });
    }
  }
};

redesSociais.forEach((el) => {
  el.onclick = (e) => {
    e.preventDefault();
    window.open(el.href);
    //console.log(el.href)
  };
});

animacao.addEventListener("animationiteration", (e) => {
  const mudaTexto = document.querySelector(".animar > h1");
  if (e.animationName == "animar-texto") {
    if (mudaTexto.innerText == "Desenvolvedor.") {
      mudaTexto.innerText = "Designer Gráfico.";
    } else {
      mudaTexto.innerText = "Desenvolvedor.";
    }
  }
});

window.onscroll = () => {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    bntTopo.style.display = "flex";
  } else {
    bntTopo.style.display = "none";
  }
};

if (window.location.hash == "#sobre") {
  document.body.scrollTop -= 100;
}

// Chamada Design Skills

fetch("../json/skills.json")
  .then((resp) => resp.json())
  .then((dados) => {
    //console.log(dados)
    const designContainer = document.querySelector(".left");
    dados.forEach((el) => {
      Object.keys(el.Design).forEach((key) => {
        const titulo = document.createElement("p");
        titulo.innerText = key;
        const barraSkill = document.createElement("div");
        barraSkill.className = "barra";
        barraSkill.innerHTML = `
    <div class="skill-design" style="width: ${el.Design[key]}">
    
    </div>
    `;
        designContainer.appendChild(titulo);
        designContainer.appendChild(barraSkill);
      });

      //console.log(Object.keys(el.Design))
    });
  });

// Chamada Dev Skills

fetch("../json/skills.json")
  .then((resp) => resp.json())
  .then((dados) => {
    //console.log(dados)
    const devContainer = document.querySelector(".right");
    dados.forEach((el) => {
      Object.keys(el.Developer).forEach((key) => {
        const titulo = document.createElement("p");
        titulo.innerText = key;
        const barraSkill = document.createElement("div");
        barraSkill.className = "barra";
        barraSkill.innerHTML = `
<div class="skill-dev" style="width: ${el.Developer[key]}">

</div>
`;
        devContainer.appendChild(titulo);
        devContainer.appendChild(barraSkill);
      });

      //console.log(Object.keys(el.Design))
    });
  });

// Call Portifolio

fetch("../json/portifolio.json")
  .then((resp) => resp.json())
  .then((dados) => {
    const portifolioContainer = document.querySelector(".portifolio-container");
    dados.forEach((el) => {
      const portifolioBox = document.createElement("div");
      portifolioBox.className = "portifolio-box";
      portifolioBox.innerHTML = `
        
        <div class="box-header">
             <div class="portifolio-image">
                 <div class="imagem-thumb">
                 <img src="${el.img}">
                 </div>
            </div>
         </div>
         <div class="box-main">
            <div class="portifolio-info">
                 <h2 style="text-align: center">${el.tecnologias}</h2>
                <h1>${el.name}</h1>
                 <button id="btn-projeto" link="${el.link}">Ver Projeto</button>
             </div>
         </div>
        
        `;
      portifolioContainer.appendChild(portifolioBox);
      //console.log(el)
    });

    // Link Projeto
    const btnProjeto = document.querySelectorAll("#btn-projeto");
    btnProjeto.forEach((el) => {
      el.style.cursor = "pointer";
      el.onclick = () => {
        const link = el.getAttribute("link");
        window.open(link, "blank");
      };
    });
  });

//Send mensagem WhatsApp

const btnSubmit = document.querySelector(".btn-submit");
console.log(btnSubmit);

btnSubmit.onclick = () => {
  const name = document.querySelector("[name=Nome]");
  const phone = document.querySelector("[name=Telefone]");
  const assunto = document.querySelector("[name=Assunto]");
  const email = document.querySelector("[name=Email]");
  const msg = document.querySelector("[name=Mensagem]");

  window.open(
    `https://wa.me/5547992735961?text=Nome:%20${name.value}%20Telefone:%20${phone.value}%20Assunto:%20${assunto.value}%20Email:%20${email.value}%20Mensagem:%20${msg.value}`,
    "_blank"
  );
};
