const cards = document.querySelectorAll(".card")
let colunas = document.querySelectorAll(".column-main")
const contAddColuna = document.querySelector(".add-coluna")
const containerColunas = document.querySelector(".container-colunas")
const colunaNome = document.querySelector("#coluna-nome")
const btnAddColuna = document.querySelector(".add-texto")
const btnConfirmarColuna = document.querySelector("#btn-add-coluna")
const btnFecharAdd = document.querySelector("#btn-fechar-add")
let btnRemoveColuna = document.querySelectorAll(".btn-remove-coluna")
let contId = 0;

console.log(colunas,btnFecharAdd)

colunaNome.style.display = "none";
btnConfirmarColuna.style.display = "none";

function addColuna() {
    const coluna = document.createElement("div");
    coluna.className = "coluna";
    coluna.id = `${contId++}-coluna`
    

    coluna.innerHTML = `
<div class="column-header">
<h2>${colunaNome.value}</h2>
<div class="header-destaque">
<h1>${colunaNome.value}</h1>
</div>
</div>
<div class="column-main">
</div>
<div class="column-footer">
<div id="btn-add-card">
    <p>+ Adicionar cartão</p>
</div>
<button class="btn-remove-coluna" id="${contId-1}-btn-remove-coluna">X</button>
</div>
`
    containerColunas.insertAdjacentElement("beforeend", coluna)

}





console.log(btnRemoveColuna)

btnConfirmarColuna.onclick = e => {
    if(colunaNome.value != ""){

    
    addColuna()
    colunas = document.querySelectorAll(".column-main")
    btnRemoveColuna = document.querySelectorAll(".btn-remove-coluna")

    btnRemoveColuna.forEach(el => {
        el.onclick = e => {
            const item = document.getElementById(`${parseInt(el.id,10)}-coluna`)
            console.log("Cliquei em remover coluna")
            containerColunas.removeChild(item)
        }
    })
    
    console.log(btnRemoveColuna)
    

    //
    cards.forEach((e, i) => {
        e.draggable = true;
        e.id = `${i}-Cards`
    
        e.ondragstart = e => {
    
            e.dataTransfer.effectAllowed = "move"
            e.dataTransfer.setData("item-id", e.target.id)
        }
    
    })
    
    colunas.forEach((e, i) => {
        e.id = `${i}-Dropzone`
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











