let cards = document.querySelectorAll(".card-container")
let colunas = document.querySelectorAll(".column-main")
const contAddColuna = document.querySelector(".add-coluna")
const containerColunas = document.querySelector(".container-colunas")
const colunaNome = document.querySelector("#coluna-nome")
const btnAddColuna = document.querySelector(".add-coluna-text")
const btnConfirmarColuna = document.querySelector("#btn-add-coluna")
const btnFecharAdd = document.querySelector("#btn-fechar-add")
let salvar = false;

let btnTextCard = document.querySelectorAll(".add-text-card")


let btnRemoveColuna = document.querySelectorAll(".btn-remove-coluna")
let contId = 0;
let cardId = 0;

console.log(colunas, btnFecharAdd)

colunaNome.style.display = "none";
btnConfirmarColuna.style.display = "none";

function addColuna() {
    const coluna = document.createElement("div");
    coluna.className = "coluna";
    coluna.id = `${contId++}-coluna`


    coluna.innerHTML = `
<div class="column-header">
     <div>
       <h2>${colunaNome.value}</h2>
       <div class="color-container">
       <input type="color" name="change-color" id="${contId}-btn-change-color" class="btn-change-color">
       </div>
     </div>
     <div id= ${contId}-color-destaque class="header-destaque">
      <h1>${colunaNome.value}</h1>
     </div>
</div>

  <div id="${contId}-Dropzone" class="column-main">
  </div>

  <div class="column-footer">
     <div id="${contId}-btn-add-card" class="btn-add-card">
     <img src="/icones/add-line.svg" width="18px" alt="Adicionar coluna" title="Adicionar coluna">
       <p>Adicionar cartão</p>
     </div>

     <div class="btn-remove-coluna" id="${contId - 1}-btn-remove-coluna">
      <img src="/icones/delete-bin-2-line.svg" width="16px" alt="Apagar" title="Apagar coluna">
     </div>
  </div>
`
    containerColunas.insertAdjacentElement("beforeend", coluna)

}


console.log(btnRemoveColuna)


btnConfirmarColuna.onclick = e => {
    if (colunaNome.value != "") {


        addColuna()
        colunas = document.querySelectorAll(".column-main")
        btnRemoveColuna = document.querySelectorAll(".btn-remove-coluna")

        // Botão Remove Coluna
        btnRemoveColuna.forEach(el => {
            el.onclick = e => {
                const item = document.getElementById(`${parseInt(el.id, 10)}-coluna`)
                console.log("Cliquei em remover coluna")
                //containerColunas.removeChild(item)
                item.remove()
            }
        })

        console.log(btnRemoveColuna)


    

        // Botão Add Card
        const btnAddCard = document.querySelectorAll(".btn-add-card")
        console.log(btnAddCard)

        btnAddCard.forEach(el => {

            el.onclick = e => {
                const id = parseInt(el.id, 10)
                const colunas = document.getElementById(`${id}-Dropzone`)
                const addTextContainer = document.createElement("div")
                addTextContainer.className = "container-text-card"
                addTextContainer.innerHTML = `
                <div class="text-card">
                 <textarea  name="text-card" id="${id}-input-text-card" class="input-text-card" cols="30" placeholder="Insira um texto para esse cartão..."></textarea>
                    </div>

                    <div class="footer-text-card">
                         <button id="${id}add-text-card" class="add-text-card">Adicionar Cartão</button>

                         <img id="${id}cancel-text-card" class="cancel-text-card" src="/icones/close-line.svg" width="25px" alt="Fechar" title="Cancelar cartão">

                         
                    </div>`
                colunas.appendChild(addTextContainer)

                // Formata area do texto

                const textCard = document.querySelectorAll(".input-text-card")
                textCard.forEach(el => {

                    el.oninput = e => {
                        el.style.height = "5px";
                        el.style.height = (el.scrollHeight) + "px";
                    }
                })

                

                //Botão confirmar texto card
                btnTextCard = document.querySelectorAll(".add-text-card")
                console.log(btnTextCard)


                

                btnTextCard.forEach(el => {
                    el.onclick = e => {

                        let texto = document.getElementById(`${id}-input-text-card`).value;
                        if (texto.length != 0) {
                            console.log("cliquei no add cartao")
                            let id = parseInt(el.id, 10);

                            const colunmContainer = document.getElementById(`${id}-Dropzone`)
                            const cardContainer = document.createElement("div");
                            cardContainer.className = "card-container"
                            cardContainer.id = `${cardId}-card-container`
                            cardContainer.innerHTML = `
                    <div class="card">
                    <textarea disabled name="text-card" id="${cardId}-text-card" class="text-card" cols="30">${texto}</textarea>
                    </div>
                    <div class="menu-card">

                       <div id="${cardId}-btn-edit-card" class="btn-edit-card">
                         <img src="/icones/edit-line.svg" width="16px" alt="Editar" title="Editar cartão">
                       </div>
                
                       <div id="${cardId}-btn-delet-card" class="btn-delet-card">
                         <img src="/icones/delete-bin-2-line.svg" width="16px" alt="Apagar" title="Apagar cartão">
                       </div>

                    
                    </div>`

                            colunmContainer.appendChild(cardContainer)
                            cardId++
                            console.log("cliquei no add card")

                            document.querySelector(".container-text-card").remove()

                            cards = document.querySelectorAll(".card-container")
                            console.log(cards)

                            //Drag e Drop
                            if (!salvar) {
                                cards.forEach((e, i) => {

                                    e.draggable = true;
                                    e.ondragstart = e => {

                                        e.dataTransfer.effectAllowed = "move"
                                        e.dataTransfer.setData("item-id", e.target.id)
                                    }

                                })
                            }
                            //
                            //Botão Remover Card
                            const btnRemoveCard = document.querySelectorAll(".btn-delet-card");


                            btnRemoveCard.forEach(el => {
                                el.onclick = e => {
                                    const id = parseInt(el.id, 10);
                                    const card = document.getElementById(`${id}-card-container`)
                                    card.remove();
                                }
                            })

                            //Formatar TextArea Card
                            const textCard2 = document.querySelectorAll(".text-card")
                            textCard2.forEach(el => {
                        
                                el.oninput = e => {
                                    
                                    //el.style.height = "5px";
                                    el.style.height = (el.scrollHeight) + "px";
                                }
                            })


                            // Botão Editar Texto Card
                            const btnEditTextCard = document.querySelectorAll(".btn-edit-card")

                            cards.forEach(el => {
                                el.onmouseover = e => {
                                    const id = parseInt(el.id, 10);
                                    const btnDelet = document.getElementById(`${id}-btn-delet-card`);
                                    btnDelet.style.display = "block";
                                    const btnEdit = document.getElementById(`${id}-btn-edit-card`);
                                    btnEdit.style.display = "block";
                                }
                                el.onmouseout = e => {
                                    const id = parseInt(el.id, 10);
                                    const btnDelet = document.getElementById(`${id}-btn-delet-card`);
                                    btnDelet.style.display = "none";
                                    const btnEdit = document.getElementById(`${id}-btn-edit-card`);
                                    btnEdit.style.display = "none";
                                }
                            })


                            btnEditTextCard.forEach(el => {
                                el.onclick = e => {


                                    console.log("Cliquei no edite")
                                    const id = parseInt(el.id, 10)
                                    const item = document.getElementById(`${id}-text-card`)
                                    const cardDrag = document.getElementById(`${id}-card-container`)
                                    cardDrag.draggable = false;
                                    let valor = item.value
                                    item.onfocus = e => {


                                        item.select();

                                    }
                                    item.removeAttribute("disabled")
                                    const btnSalvar = document.createElement("button")
                                    btnSalvar.className = "btn-salvar"
                                    btnSalvar.innerText = "Salvar"
                                    const card = document.getElementById(`${id}-card-container`)
                                    card.insertAdjacentElement("afterend", btnSalvar)

                                    btnSalvar.onclick = e => {
                                        item.setAttribute("disabled", "")
                                        cardDrag.draggable = true;
                                        btnSalvar.remove()
                                    }
                                }
                            })

                        }
                        // Remove Scroll da TextArea do Card
                        const textCard2 = document.querySelectorAll(".text-card")
                        textCard2.forEach(el => {
                    
                                el.style.height = (el.scrollHeight) + "px";
                            
                        })
                    }

                })



                
                // Botão cancelar add texto
                const btnCancelTextCard = document.querySelector(".cancel-text-card")
                btnCancelTextCard.onclick = e => {
                    document.querySelector(".container-text-card").remove()
                }

            }


            colunas.forEach((e, i) => {

                e.ondragover = e => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = "move"
                }

                e.ondrop = e => {

                    const id = e.dataTransfer.getData("item-id")
                    const item = document.getElementById(id)

                    console.log(item)
                    e.target.appendChild(item)
                }

            })


        })


        // Muda a cor do Destaque
        const btnChangeColor = document.querySelectorAll(".btn-change-color")
        btnChangeColor.forEach(el => {

            el.onchange = (e) => {
                const btnId = parseInt(e.target.id, 10)
                const corDestaque = document.getElementById(`${btnId}-color-destaque`)
                corDestaque.style.backgroundColor = e.target.value
            }

        })





    }
}


btnAddColuna.onclick = e => {
    contAddColuna.style.height = "100px"
    btnAddColuna.style.display = "none"
    colunaNome.style.display = "flex"
    btnConfirmarColuna.style.display = "block";
    colunaNome.placeholder = "Insira o nome da coluna"

    console.log("cliquei no aa")
}

///
btnFecharAdd.onclick = e => {
    contAddColuna.style.height = "35px";
    btnAddColuna.style.display = "flex"
    colunaNome.style.display = "none"
    btnConfirmarColuna.style.display = "none";

}

    ///

   
