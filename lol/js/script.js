const cardsRotationContainer = document.querySelector(".cards-rotation-container")
const apiKey = "RGAPI-1ef20c02-59c8-40e8-a9eb-6d294fa93b17"
const url = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json';
const urlRotation = `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`;
const loadScreen = 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
const squareAssets = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/';
const passiveAssets = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/img/passive/';
const splashAssets = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
const urlChamp = "https://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/"
const btnJogar = document.querySelector(".btn-jogar")

btnJogar.onclick = e => {
    window.open("https://signup.leagueoflegends.com/pt-br/signup/index?_gl=1*xnw3l2*_ga*MTQ2MjU1NDg3Ni4xNjcxNTk2NDQw*_ga_FXBJE5DEDD*MTY3MTU5NjQzOS4xLjEuMTY3MTU5NjU1MC42MC4wLjA.#/", "blank")
}

fetch(urlRotation)
    .then(resp => resp.json())
    .then(dados => {
        // console.log(dados.freeChampionIds);

        fetch(url)
            .then(resp => resp.json())
            .then(champs => {
                console.log(champs.data);

                Object.keys(champs.data).forEach(el => {
                    dados.freeChampionIds.forEach(keychamp => {
                        if (champs.data[el].key == keychamp) {
                            const divCardRotation = document.createElement('div');
                            divCardRotation.className = `card-rotation`
                            divCardRotation.id = `${keychamp}-card-rotation`;
                            divCardRotation.setAttribute("name", champs.data[el].id)
                            divCardRotation.innerHTML = `
                            <div class="champ-rotation-name">
                            <h1>${champs.data[el].id}</h1>
                            <h2>${champs.data[el].title}</h2>
                            </div>
                            <div class="${keychamp}-img-rotation-container">
                              <img id="${champs.data[el].id}" class="img-rotation"  src="${splashAssets + champs.data[el].id}_0.jpg" alt"">
                            </div>
                            `
                            cardsRotationContainer.appendChild(divCardRotation)

                        }
                    });
                });

                //Add background Header
                const imgsRotaion = document.querySelectorAll(".img-rotation")
                // console.log(imgsRotaion[0].id)
                const rotationMain = document.querySelector(".rotation-container")
                //rotationMain.style.backgroundImage = `url("${splashAssets + imgsRotaion[0].id}_0.jpg")`


                //Muda Background header
                const todosCardsRotation = document.querySelectorAll(".img-rotation")
                //console.log(todosCardsRotation)
                todosCardsRotation.forEach(el => {
                    const rotationInfo = document.querySelector(".rotation-main")

                    el.onclick = e => {
                        rotationInfo.innerHTML = "";
                        const video = document.querySelector(".video-bg")
                        rotationInfo.innerHTML = `
                        <h1>${champs.data[el.id].id}</h1>
                        <h2>${champs.data[el.id].title}</h2>
                        <p>${champs.data[el.id].blurb}</p>
                        
                        `

                        if (video) {
                            video.remove()
                        }
                        // console.log(champs.data)
                        rotationMain.style.backgroundImage = `url("${splashAssets + el.id}_0.jpg")`

                    }



                })
                // Slide

                const navLeft = document.querySelector("#slide-left")
                const navRight = document.querySelector("#slide-right")
                console.log(navLeft)

                navLeft.onclick = e => {
                    console.log("Cliquei na seta esquerda")
                    const cardsRotatioContainer = document.querySelector(".cards-rotation-container")
                    const cardsRotation = document.querySelectorAll(".card-rotation")
                    cardsRotation.forEach(el => {
                        el.setAttribute("slide-prev", "")
                        el.addEventListener("animationend", () => {
                            el.removeAttribute("slide-prev")
                            cardsRotatioContainer.appendChild(cardsRotation[0])
                        })
                    })
                }

                //
                navRight.onclick = e => {
                    console.log("Cliquei na seta esquerda")
                    const cardsRotatioContainer = document.querySelector(".cards-rotation-container")
                    const cardsRotation = document.querySelectorAll(".card-rotation")
                    cardsRotation.forEach(el => {
                        el.setAttribute("slide-next", "")
                        el.addEventListener("animationend", () => {
                            el.removeAttribute("slide-next")
                            cardsRotatioContainer.insertAdjacentElement("afterbegin", cardsRotation[cardsRotation.length - 1])
                        })
                    })
                }

                const cardsRotation = document.querySelectorAll(".card-rotation");

                cardsRotation.forEach(el => {
                    el.onclick = e => {
                        const infos = document.querySelector(".infos")
                        infos.innerHTML = `
                <h1>${champs.data[el.getAttribute("name")].id}</h1>
                <h3>${champs.data[el.getAttribute("name")].blurb}</h3>
                `
                        const container = document.querySelector(".container");
                        const videoBG = document.querySelector(".video-bg")
                        const imgBG = document.createElement("img");
                        imgBG.className = "img-bg";
                        imgBG.src = `${splashAssets + el.getAttribute("name")}_0.jpg`
                        if (videoBG) {
                            videoBG.remove()
                            container.appendChild(imgBG)
                        } else {
                            const img = document.querySelector(".img-bg")
                            img.remove()
                            container.appendChild(imgBG)

                        }


                    }
                })

            });


    })
    .catch(error => {
        console.log(`erro: ${error}`)
        const cardsRotatioContainer = document.querySelector(".cards-rotation-container")
        const msgErro = document.createElement("h4")
        msgErro.className = "msgErro"
        msgErro.innerText = "ROTAÇÃO DE CAMPEÕES NÃO DISPONÍVEL"
        cardsRotatioContainer.appendChild(msgErro)
    })

const menuList = document.querySelectorAll(".menu-class");

menuList.forEach(el => {

    el.onclick = e => {
        menuList.forEach(el => {
            el.removeAttribute("menu-destaque")
        })
        document.title = el.getAttribute("classe") + " - League of Legends"
        console.log(`Cliquei no menu`)
        champClassList(el.id, el.getAttribute("classe"))
        el.setAttribute("menu-destaque", "")
    }
})


function champClassList(classe, titulo) {
    const container = document.querySelector(".container")
    const imagemBG = document.querySelector(".img-bg")
    if (imagemBG) {
        imagemBG.remove()
    } else {
        const videoAtual = document.querySelector(".video-bg")
        videoAtual.remove()
    }
    const video = document.createElement("video")
    video.className = "video-bg"
    video.setAttribute("loop", "")
    video.setAttribute("muted", "")
    video.setAttribute("autoplay", "")
    const source = document.createElement("source")
    source.src = "/lol/videos/video_back_3.mp4"
    source.type = "video/mp4"


    video.appendChild(source)
    container.insertAdjacentElement("beforeend", video)

    fetch(url)
        .then(resp => resp.json())
        .then(dados => {
            const containerInfo = document.querySelector(".container-info")
            containerInfo.style = "overflow-y: scroll;"
            containerInfo.innerHTML = ""
            //console.log(dados.data)
            const classeTitulo = document.createElement("h1")
            classeTitulo.className = "classe-titulo"
            classeTitulo.innerText = titulo
            containerInfo.appendChild(classeTitulo)

            classeTitulo.addEventListener("animationend", () => {
                classeTitulo.style.display = "none"
                Object.keys(dados.data).forEach(el => {

                    if (dados.data[el].tags.includes(classe)) {
                        const champCard = document.createElement("div")
                        champCard.className = "champ-card"
                        champCard.id = dados.data[el].id
                        champCard.innerHTML = `
            <div class="img-champ-card-container">
            <img id="${dados.data[el].id}-img-champ-card" class="img-champ-card" src="${loadScreen + dados.data[el].id}_0.jpg">
            </div>
            <div id="${dados.data[el].id}-champ-card-footer" class="champ-card-footer">
              <h1>${dados.data[el].id}</h1>
            </div>
    `
                        containerInfo.appendChild(champCard)

                        console.log(dados.data[el].id)
                    }
                    //console.log(dados.data[el].id)
                })
                // Animação Cards
                const allChampCards = document.querySelectorAll(".champ-card");
                console.log(allChampCards)

                allChampCards.forEach(el => {
                    el.onmouseover = e => {

                        //const numero = (min, max) => Math.floor(Math.random() * (max - min) + min)

                        const footerCardInfo = document.getElementById(`${el.id}-champ-card-footer`)
                        const imgChampCard = document.getElementById(`${el.id}-img-champ-card`)
                        footerCardInfo.setAttribute("destaqueFooter", "")
                        footerCardInfo.style.color = "rgb(48, 33, 12)"
                        imgChampCard.setAttribute("img-destaque", "")
                        imgChampCard.src = `${loadScreen + el.id}_1.jpg`


                    }

                    el.onmouseout = e => {

                        const footerCardInfo = document.getElementById(`${el.id}-champ-card-footer`)
                        const imgChampCard = document.getElementById(`${el.id}-img-champ-card`)
                        footerCardInfo.removeAttribute("destaqueFooter")
                        footerCardInfo.style.color = "rgb(255, 255, 255)"
                        imgChampCard.removeAttribute("img-destaque")
                        imgChampCard.src = `${loadScreen + el.id}_0.jpg`
                    }

                    el.onclick = e => {
                        champInfos(urlChamp, el.id)
                    }


                })
            })




        })
}


// Chama as informações por campeão

function champInfos(url, champName) {
    const champUrl = `${url + champName}.json`

    fetch(champUrl)
        .then(resp => resp.json())
        .then(champData => {

            console.log(champName)
            console.log(champData.data[champName])

            const containerChampInfos = document.createElement("div")
            containerChampInfos.className = "container-champ-infos"
            containerChampInfos.innerHTML = `
        
        <div class="champ-infos-main">
           <div class="champ-infos-header">
              <img class="btn-close-info" src="/lol/icones/close-line.svg">
           </div>
        <div class="champ-infos-sub">
        <div class="champ-infos-main-top">
        <h2>${champData.data[champName].title}</h2>
        <h1>${champData.data[champName].id}</h1>
        </div>
           <div class="champ-infos-main-bottom">
              <div class="champ-infos-bottom-left">
              <div class="champ-function">
              <img class="img-function" src="/lol/icones/${champData.data[champName].tags[0].toLowerCase()}-ico.svg">
              <p>Função</p>
              <p>${classePtBR(champData.data[champName].tags[0])}</p>
              </div>
              <div class="champ-difficulty">
             <div class="difficulty-style">
             <div></div>
             <div></div>
             <div></div>
             </div>
              <p>dificuldade</p>
              <p>${dificuldade(champData.data[champName].info.difficulty)}</p>
              </div>
              </div>
              <div class="champ-infos-bottom-right">
              <p>${champData.data[champName].lore}</p>
              </div>
           </div>
        </div>
        
           <img class="img-bg-champ-infos" src="${splashAssets + champName}_0.jpg">
        </div>
        
        `
            document.body.appendChild(containerChampInfos)
            const difficultyStyle = document.querySelector(".difficulty-style")
            dificuldadeDisplay(dificuldade(champData.data[champName].info.difficulty), difficultyStyle)
            const titulo = []
            titulo.push(document.title)
            document.title = `${champData.data[champName].id} - League of Legends`

            const btnCloseInfo = document.querySelector(".btn-close-info")
            btnCloseInfo.onclick = e => {
                const infoContainer = document.querySelector(".container-champ-infos")
                infoContainer.remove()
                document.title = titulo[0]
            }

        })

}


// Função Dificuldades

function dificuldade(numero) {
    if (numero <= 3) {
        return "baixa"
    } else if (numero > 3 && numero < 8) {
        return "moderada"
    } else if (numero >= 8) {
        return "alta"
    }
}

// Função Dificuldade Display

function dificuldadeDisplay(dificuldade, objeto) {

    return objeto.setAttribute(dificuldade, "")

}

// Função Classe

function classePtBR(classe) {
    switch (classe) {
        case "Assassin": return "Assassino"
            break;
        case "Fighter": return "Lutador"
            break;
        case "Mage": return "Mago"
            break;
        case "Marksman": return "Atirador"
            break;
        case "Support": return "Suporte"
            break;
        case "Tank": return "Tanque"
            break;
    }
}
