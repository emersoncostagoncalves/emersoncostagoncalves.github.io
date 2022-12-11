const chaveAPI = "b502db08defaa68db6de86429c3ab26f"
const url = `https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=${chaveAPI}`
const menuContainer = document.querySelector("#menuContainer")
const cardContainer = document.querySelector("#containerCards")
const sectionContainerBox1 = document.querySelector("#sectionContainerBox1")
const sectionContainerBox2 = document.querySelector("#sectionContainerBox2")
const logo = document.querySelector("#logo")
const btnHome = document.querySelector(".btnMenuHome")
btnHome.setAttribute("btndestaque", "")
const searchBar = document.querySelector(".searchBar")
let pageNumber = 0;

btnHome.onclick = () => {
    window.location.href = "index.html"

}

//Add Seção na homePage


const options = {
    "async": true,
    "crossDomain": true,
    "method": "GET",
    "headers": {
        "authorization": "Bearer <<access_token>>"
    },
    "data": "{}"
}


// Menu && Id Generos
fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b502db08defaa68db6de86429c3ab26f&language=pt-BR")
    .then(res => res.json())
    .then(dados => {
        //console.log(dados)

        dados.genres.forEach(el => {
            const btnMenu = document.createElement("button");
            btnMenu.innerText = el.name;
            btnMenu.className = "btnMenu";
            btnMenu.id = el.id;
            menuContainer.appendChild(btnMenu)

        })
        const btnMenu = document.querySelectorAll(".btnMenu");

        btnMenu.forEach(el => {

            el.onclick = e => {
                loadList(btnMenu, el);


            }
        })

    }
    )



// Chama a API e cria os cardsbox

function loadList(btnMenu, el, pageNumber = 1) {

    window.location.hash = el.innerText.toLowerCase()
    cardContainer.innerHTML = ""

    btnMenu.forEach(el => {
        el.removeAttribute("btnDestaque")
        btnHome.removeAttribute("btnDestaque")
    })
    el.setAttribute("btnDestaque", "")

    const idGenero = el.id
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=b502db08defaa68db6de86429c3ab26f&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${idGenero}&with_watch_monetization_types=flatrate`
    const urlImagem = "https://image.tmdb.org/t/p/original/";



    fetch(url)
        .then(resp => resp.json())
        .then(dados => {


            console.log(dados)

            if (dados.results.length == 0) {
                const erro = document.createElement("h1");
                erro.innerText = "LISTA NÃO DISPONÍVEL"
                erro.className = "msgErro"

                cardContainer.appendChild(erro);
            } else {
                dados.results.forEach(el => {

                    const cardBox = document.createElement("div");
                    cardBox.id = "cardBox";
                    cardBox.setAttribute("movieID", el.id)

                    const cardPoster = document.createElement("div");
                    cardPoster.className = "cardPoster"
                    cardPoster.id = "cardPoster";
                    const poster = document.createElement("img");
                    poster.className = "poster"

                    if(el.poster_path != null){
                        poster.src = urlImagem + el.poster_path
                    }else{
                        poster.src = "../imagens/poster_null.png"
                    }

                   
                    cardPoster.appendChild(poster);

                    const cardInfo = document.createElement("div");
                    cardInfo.className = "cardInfo"
                    cardInfo.id = "cardInfo"
                    const titleBox = document.createElement("div")
                    titleBox.className = "titleBox"
                    const titleMovie = document.createElement("h1")
                    titleMovie.innerText = el.title
                    const divRate = document.createElement("div")
                    divRate.className = "divRate"


                    function formatDate(string) {
                        let dataFormatada = [];

                        dataFormatada.push(string[8], string[9]);
                        dataFormatada.push(string[7]);
                        dataFormatada.push(string[5], string[6]);
                        dataFormatada.push(string[4]);
                        dataFormatada.push(string[0], string[1], string[2], string[3]);
                        return dataFormatada.join("")
                    }


                    divRate.innerHTML = `
            <p>Nota: <span class='destaque'>${el.vote_average}</span></p>
            <p>Ano de Lançamento: <span class='destaque'>${formatDate(el.release_date)}</span></p>

             `

                    titleBox.appendChild(titleMovie)
                    cardInfo.appendChild(titleBox)
                    cardInfo.appendChild(divRate)


                    cardBox.appendChild(cardPoster)
                    cardBox.appendChild(cardInfo)
                    cardContainer.appendChild(cardBox)



                })
                const barNav = document.createElement("div")
                barNav.className = "barNav";
                const btnPageNext = document.createElement("button")
                btnPageNext.id = "btnNext"
                btnPageNext.innerText = "Próxima Página"
                const btnPagePrevious = document.createElement("button")
                btnPagePrevious.id = "btnPrevious"
                btnPagePrevious.innerText = "Página Anterior"
                barNav.appendChild(btnPagePrevious);
                barNav.appendChild(btnPageNext);

                cardContainer.appendChild(barNav);
                window.scrollTo(0, 0)

                if (pageNumber == 1) {
                    const btn = document.querySelector("#btnPrevious")
                    btn.style.display = "none"
                } else if (pageNumber == dados.total_pages) {
                    const btn = document.querySelector("#btnNext")
                    btn.style.display = "none"
                } else {
                    const btn = document.querySelector("#btnPrevious")
                    btn.style.display = "block"
                }

                btnPageNext.onclick = e => {
                    e.preventDefault(e);
                    const totalPages = dados.total_pages
                    pageNumber++
                    loadList(btnMenu, el, pageNumber)
                    window.location.hash += `&pagina=${pageNumber}`
                    console.log(totalPages)
                }

                btnPagePrevious.onclick = e => {
                    e.preventDefault(e);
                    const totalPages = dados.total_pages
                    pageNumber--
                    loadList(btnMenu, el, pageNumber)
                    window.location.hash += `&pagina=${pageNumber}`
                    console.log(totalPages)
                }


            }
 // Card infos
 const todosCards = document.querySelectorAll("#cardBox")
 info(todosCards)
        })
        .catch(err => {
            console.log(err)
            const erro = document.createElement("h1");
            erro.innerText = "LISTA NÃO DISPONÍVEL"
            erro.className = "msgErro"
            cardContainer.appendChild(erro);
            console.log("Erro: " + err)
        })

}


// Destaques Página Principal

function loadFeatures(sort, sectionContainerBox, paramBox, pageNumber = 1) {

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=b502db08defaa68db6de86429c3ab26f&language=pt-BR&sort_by=${sort}&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`
    const urlImagem = "https://image.tmdb.org/t/p/original/";

    fetch(url)
        .then(resp => resp.json())
        .then(dados => {


            //console.log(dados.items)

            if (dados.results.length == 0) {
                const erro = document.createElement("h1");
                erro.innerText = "LISTA NÃO DISPONÍVEL"
                erro.className = "msgErro"

                cardContainer.appendChild(erro);
            } else {
                dados.results.forEach(el => {

                    const cardBox = document.createElement("div");
                    cardBox.id = "cardBox";
                    cardBox.setAttribute("movieID", el.id)
                    cardBox.setAttribute(paramBox, "")

                    const cardPoster = document.createElement("div");
                    cardPoster.className = "cardPoster"
                    cardPoster.id = "cardPoster";
                    const poster = document.createElement("img");
                    poster.className = "poster"

                    if(el.poster_path != null){
                        poster.src = urlImagem + el.poster_path
                    }else{
                        poster.src = "../imagens/poster_null.png"
                    }

                    cardPoster.appendChild(poster);

                    const cardInfo = document.createElement("div");
                    cardInfo.className = "cardInfo"
                    cardInfo.id = "cardInfo"
                    const titleBox = document.createElement("div")
                    titleBox.className = "titleBox"
                    const titleMovie = document.createElement("h1")
                    titleMovie.innerText = el.title
                    const divRate = document.createElement("div")
                    divRate.className = "divRate"


                    function formatDate(string = "Não encontrada") {
                        if (string.length != 10) {
                            return string
                        } else {


                            let dataFormatada = [];

                            dataFormatada.push(string[8], string[9]);
                            dataFormatada.push(string[7]);
                            dataFormatada.push(string[5], string[6]);
                            dataFormatada.push(string[4]);
                            dataFormatada.push(string[0], string[1], string[2], string[3]);
                            return dataFormatada.join("")
                        }
                    }


                    divRate.innerHTML = `
            <p>Nota: <span class='destaque'>${el.vote_average}</span></p>
            <p>Ano de Lançamento: <span class='destaque'>${formatDate(el.release_date)}</span></p>

             `



                    titleBox.appendChild(titleMovie)
                    cardInfo.appendChild(titleBox)
                    cardInfo.appendChild(divRate)

                    cardBox.appendChild(cardPoster)
                    cardBox.appendChild(cardInfo)

                    sectionContainerBox.appendChild(cardBox)

                })

            }

            // Card infos
            const todosCards = document.querySelectorAll("#cardBox")
            info(todosCards)

        })
        .catch(err => {
            console.log(err)
            const erro = document.createElement("h1");
            erro.innerText = "LISTA NÃO DISPONÍVEL"
            erro.className = "msgErro"
            cardContainer.appendChild(erro);
            console.log("Erro: " + err)
        })

}

const sortPopular = "popularity.desc"
const sortLancamento = "vote_count.desc"
const paramSec1 = "section1"
const paramSec2 = "section2"

loadFeatures(sortPopular, sectionContainerBox1, paramSec1);
loadFeatures(sortLancamento, sectionContainerBox2, paramSec2);


logo.onclick = e => {


    window.location.href = "index.html"


}


// Animacao btn slide

const btnLeft = document.querySelector("#navLeft1")
const btnRight = document.querySelector("#navRight1")
const arrowLeft = document.querySelector("#arrowLeft1")
const arrowRight = document.querySelector("#arrowRight1")



btnLeft.onmouseover = e => {
    arrowLeft.classList.toggle("arrowLeft")
}

btnLeft.onmouseout = e => {
    arrowLeft.classList.toggle("arrowLeft");
}

btnRight.onmouseover = e => {
    arrowRight.classList.toggle("arrowRight")
}

btnRight.onmouseout = e => {
    arrowRight.classList.toggle("arrowRight");
}



arrowLeft.onclick = e => {

    const moviesBox = document.querySelectorAll("[section1]")

    moviesBox.forEach(el => {
        el.setAttribute("slide-prev", "")

        el.addEventListener('animationend', function (event) {
            sectionContainerBox1.appendChild(moviesBox[0])
            el.removeAttribute("slide-prev")
        })
    })


    console.log(moviesBox)

}


arrowRight.onclick = e => {
    const moviesBox = document.querySelectorAll("[section1]")

    moviesBox.forEach(el => {
        el.setAttribute("slide-next", "")
        el.addEventListener('animationend', function (event) {
            sectionContainerBox1.insertAdjacentElement("afterbegin", (moviesBox[moviesBox.length - 1]))
            el.removeAttribute("slide-next")


        })
    })

}

const btnLeft2 = document.querySelector("#navLeft2")
const btnRight2 = document.querySelector("#navRight2")
const arrowLeft2 = document.querySelector("#arrowLeft2")
const arrowRight2 = document.querySelector("#arrowRight2")

btnLeft2.onmouseover = e => {
    arrowLeft2.classList.toggle("arrowLeft")
}

btnLeft2.onmouseout = e => {
    arrowLeft2.classList.toggle("arrowLeft");
}

btnRight2.onmouseover = e => {
    arrowRight2.classList.toggle("arrowRight")
}

btnRight2.onmouseout = e => {
    arrowRight2.classList.toggle("arrowRight");
}

arrowLeft2.onclick = e => {

    const moviesBox = document.querySelectorAll("[section2]")

    moviesBox.forEach(el => {
        el.setAttribute("slide-prev", "")

        el.addEventListener('animationend', function (event) {
            sectionContainerBox2.appendChild(moviesBox[0])
            el.removeAttribute("slide-prev")

        })
    })

    console.log(moviesBox)

}


arrowRight2.onclick = e => {
    const moviesBox = document.querySelectorAll("[section2]")

    moviesBox.forEach(el => {
        el.setAttribute("slide-next", "")
        el.addEventListener('animationend', function (event) {
            sectionContainerBox2.insertAdjacentElement("afterbegin", (moviesBox[moviesBox.length - 1]))
            el.removeAttribute("slide-next")

        })
    })

}

function search(pesquisa, pageNumber = 1) {
    const pesquisaFormat = string => {
        return string.trim().replaceAll(" ", "+")
    }

    if (pesquisa != "") {
        cardContainer.innerHTML = "";
        window.location.hash = `pesquisa=${pesquisaFormat(pesquisa)}&pagina=${pageNumber}`
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b502db08defaa68db6de86429c3ab26f&language=pt-BR&query=${pesquisa}&page=${pageNumber}&include_adult=false`
        const urlImagem = "https://image.tmdb.org/t/p/original/";
        console.log(url)


        fetch(url)
            .then(resp => resp.json())
            .then(dados => {


                console.log(dados)

                if (dados.results.length == 0) {
                    const erro = document.createElement("h1");
                    erro.innerText = "LISTA NÃO DISPONÍVEL"
                    erro.className = "msgErro"

                    cardContainer.appendChild(erro);
                } else {
                    dados.results.forEach(el => {

                        const cardBox = document.createElement("div");
                        cardBox.id = "cardBox";
                        cardBox.setAttribute("movieID", el.id)

                        const cardPoster = document.createElement("div");
                        cardPoster.className = "cardPoster"
                        cardPoster.id = "cardPoster";
                        const poster = document.createElement("img");
                        poster.className = "poster"
                        if(el.poster_path != null){
                        poster.src = urlImagem + el.poster_path
                    }else{
                        poster.src = "../imagens/poster_null.png"
                    }
                        cardPoster.appendChild(poster);

                        const cardInfo = document.createElement("div");
                        cardInfo.className = "cardInfo"
                        cardInfo.id = "cardInfo"
                        const titleBox = document.createElement("div")
                        titleBox.className = "titleBox"
                        const titleMovie = document.createElement("h1")
                        titleMovie.innerText = el.title
                        const divRate = document.createElement("div")
                        divRate.className = "divRate"


                        function formatDate(string = "Não encontrada") {
                            if (string.length != 10) {
                                return string
                            } else {


                                let dataFormatada = [];

                                dataFormatada.push(string[8], string[9]);
                                dataFormatada.push(string[7]);
                                dataFormatada.push(string[5], string[6]);
                                dataFormatada.push(string[4]);
                                dataFormatada.push(string[0], string[1], string[2], string[3]);
                                return dataFormatada.join("")
                            }
                        }


                        divRate.innerHTML = `
                    <p>Nota: <span class='destaque'>${el.vote_average}</span></p>
                    <p>Ano de Lançamento: <span class='destaque'>${formatDate(el.release_date)}</span></p>

                    `

                        titleBox.appendChild(titleMovie)
                        cardInfo.appendChild(titleBox)
                        cardInfo.appendChild(divRate)


                        cardBox.appendChild(cardPoster)
                        cardBox.appendChild(cardInfo)
                        cardContainer.appendChild(cardBox)

                    })

                    const barNav = document.createElement("div")
                    barNav.className = "barNav";
                    const btnPageNext = document.createElement("button")
                    btnPageNext.id = "btnNext"
                    btnPageNext.innerText = "Próxima Página"
                    const btnPagePrevious = document.createElement("button")
                    btnPagePrevious.id = "btnPrevious"
                    btnPagePrevious.innerText = "Página Anterior"
                    barNav.appendChild(btnPagePrevious);
                    barNav.appendChild(btnPageNext);

                    cardContainer.appendChild(barNav);
                    window.scrollTo(0, 0)

                    if (pageNumber == 1 && dados.total_pages > 1) {
                        const btn = document.querySelector("#btnNext")
                        btn.style.display = "block"
                        const btn2 = document.querySelector("#btnPrevious")
                        btn2.style.display = "none"
                    } else if (pageNumber == dados.total_pages && dados.total_pages > 1) {
                        const btn = document.querySelector("#btnNext")
                        btn.style.display = "none"
                        const btn2 = document.querySelector("#btnPrevious")
                        btn2.style.display = "block"
                    } else if (pageNumber == 1 && dados.total_pages == 1) {
                        const btn = document.querySelector("#btnNext")
                        btn.style.display = "none"
                        const btn2 = document.querySelector("#btnPrevious")
                        btn2.style.display = "none"

                    } else {
                        const btn = document.querySelector("#btnPrevious")
                        btn.style.display = "block"
                        const btn2 = document.querySelector("#btnNext")
                        btn2.style.display = "block"
                    }

                    btnPageNext.onclick = e => {
                        e.preventDefault(e);
                        const totalPages = dados.total_pages
                        pageNumber++
                        search(pesquisa, pageNumber)
                        window.location.hash = `pesquisa=${pesquisaFormat(pesquisa)}&pagina=${pageNumber}`
                        console.log(totalPages)
                    }

                    btnPagePrevious.onclick = e => {
                        e.preventDefault(e);
                        const totalPages = dados.total_pages
                        pageNumber--
                        search(pesquisa, pageNumber)
                        window.location.hash = `pesquisa=${pesquisaFormat(pesquisa)}pagina=${pageNumber}`
                        console.log(totalPages)
                    }


                }
                //Function Descrição
                const todosCards = document.querySelectorAll("#cardBox")
                info(todosCards)
            })
            .catch(err => {
                console.log(err)
                const erro = document.createElement("h1");
                erro.innerText = "LISTA NÃO DISPONÍVEL"
                erro.className = "msgErro"
                cardContainer.appendChild(erro);
                console.log("Erro: " + err)
            })
    }
}


searchBar.onfocus = e => {
    e.target.select()
}
searchBar.onchange = e => {
    search(e.target.value)
}

// Chama a Descrição dos Cards

function info(cards) {

    const urlImagem = "https://image.tmdb.org/t/p/original"

    cards.forEach(el => {
        el.onclick = e => {
            const movieId = el.getAttribute("movieid");
            console.log(movieId)
            const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=b502db08defaa68db6de86429c3ab26f&language=pt-BR`
            fetch(url)
                .then(resp => resp.json())
                .then(dados => {

                    console.log(dados)
                    const infoContainer = document.createElement("div");
                    infoContainer.className = "infoContainer";

                    function formatDate(string = "Não encontrada") {
                        if (string.length != 10) {
                            return string
                        } else {


                            let dataFormatada = [];

                            dataFormatada.push(string[8], string[9]);
                            dataFormatada.push(string[7]);
                            dataFormatada.push(string[5], string[6]);
                            dataFormatada.push(string[4]);
                            dataFormatada.push(string[0], string[1], string[2], string[3]);
                            return dataFormatada.join("")
                        }
                    }

                    let poster_path = "";
                    if(dados.poster_path != null){
                         poster_path = `${urlImagem + dados.poster_path}`
                    }else{
                        poster_path = "../imagens/poster_null.png"
                    }

                    infoContainer.innerHTML = `
    
    <div class="infoBox">

       <div class="boxHeader">
          <div class="btnFechar">
            <img src="../icones/close-line.svg" width="50px" alt="" title="">
          </div>
        </div>

      <div class="boxMain">
            <div class="posterInfo">
               <img src="${poster_path}" width="100%" alt="" title="${dados.title}">
            </div>

           <div class="textInfo">
               <div class="textInfoHeader">
                   <h1>${dados.title}</h1>
                   <div class="textInfoHeaderDesc">
                   <h3>${formatDate(dados.release_date)}</h3>
                   </div>
                   
              </div>

               <div class="textInfoMain">
                  <h2>Sinopse</h2>
                  <p>${dados.overview}</p>
              </div>

              <div class="textInfoFooter">
              
              </div>
           </div>

        </div>

        <div class="boxFooter"></div>

    </div>
    `
    

                    document.body.insertAdjacentElement("afterbegin", infoContainer)
                    const infoBox = document.querySelector(".infoBox")
                    infoBox.style.backgroundImage = `url(${urlImagem + dados.backdrop_path})`

                    const btnFecharInfo = document.querySelector(".btnFechar")

                    btnFecharInfo.onclick = e => {
                        infoContainer.remove();
                    }

                    // Add company logos
                    const textInfoFooter = document.querySelector(".textInfoFooter");
                    dados.production_companies.forEach(el => {
                        if(el.logo_path != null){
                        const img = document.createElement("img")
                        img.src = `${urlImagem+el.logo_path}`
                        img.style.width = "80px"
                        img.title = el.name

                        textInfoFooter.appendChild(img)
                        }
                    })
                    //Add Genres
                    const textInfoHeader = document.querySelector(".textInfoHeader");
                    const textInfoHeaderDesc = document.querySelector(".textInfoHeaderDesc")
                    dados.genres.forEach(el => {
                        if(el.name != null){
                        const h3 = document.createElement("h3")
                        h3.innerText = el.name
                        const ball = document.createElement("div")
                        ball.className = "ballList"
                        textInfoHeaderDesc.appendChild(ball)
                        textInfoHeaderDesc.appendChild(h3)
                        textInfoHeader.appendChild(textInfoHeaderDesc)
                        }
                    })
                    // Add tempo
                    const runtime = new Date()
                    runtime.setHours(0)
                    runtime.setMinutes(dados.runtime)
                    const h3 = document.createElement("h3")
                    h3.innerText = `${runtime.getHours()}h ${runtime.getMinutes()}m`
                    const ball = document.createElement("div")
                        ball.className = "ballList"
                        textInfoHeaderDesc.appendChild(ball)
                    
                    textInfoHeaderDesc.appendChild(h3)

                })


        }
    })
}