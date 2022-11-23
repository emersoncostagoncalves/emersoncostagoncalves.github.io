let urlPrevisao = "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America%2FSao_Paulo&"
const urlMunicipios = "/json/municipios.json"
const urlUf = "/json/uf-brasil.json"
const urlCodigo = "/json/municipios.json"
const urlLatitude = "/json/coordenadas.json"


const selectUF = document.querySelector("#uf")
const selectMunicipio = document.querySelector("#municipios")
const visorTemperatura = document.querySelector("#temperatura")
const localImagem = document.querySelector("#imagem")
const localCondicao = document.querySelector("#condição")
const nomeCidade = document.querySelector("#city-name")
const visorData = document.querySelector("#data")
const btnRefresh = document.querySelector("#refresh")

// Geo Localização

function geoLocal(pos){
geoLat = pos.coords.latitude.toFixed(2)  
geoLong = pos.coords.longitude.toFixed(2)
console.log(pos)
console.log(geoLat)
const urlGeo = `latitude=${geoLat}&longitude=${geoLong}`
const urlFinal = urlPrevisao+urlGeo
console.log(urlGeo)

// Buscas Dados Meteorologicos
fetch(urlFinal)
.then(res => res.json())
.then(json => {
 
 const tempo = json.current_weather;
 const temperatura = tempo.temperature;
 const veloVento = tempo.windspeed;
 const tempoCodigo = tempo.weathercode;

 visorTemperatura.innerText = temperatura.toFixed(0);
 nomeCidade.innerText = "Localização Atual"
 //


 const condicoesTempo = [
  {code: 0 , nome: "Céu Limpo", img: "/imagens/sol.png"},
  {code: 1, nome: "Principalmente Claro", img: "/imagens/sol-poucas-nuvens.png"},
  {code: 2, nome: "Parcialmente Nublado", img: "/imagens/sol-nuvens.png"},
  {code: 3, nome: "Nublado", img: "/imagens/nublado.png"},
  {code: 45, nome: "Nevoeiro", img: "/imagens/nublado-chuva.png"},
  {code: 48, nome: "Nevoeiro e Geada", img: "/imagens/nublado-chuva.png"},
  {code: 51, nome: "Garoa Leve", img: "/imagens/chuva.png"},
  {code: 53, nome: "Garoa Moderada", img: "/imagens/chuva.png"},
  {code: 55, nome: "Garoa Forte", img: "/imagens/chuva.png"},
  {code: 56, nome: "Frio com garoa leve", img: "/imagens/chuva.png"},
  {code: 57, nome: "Frio com garoa forte", img: "/imagens/chuva.png"},
  {code: 61, nome: "Chuva Leve", img: "/imagens/chuva.png"},
  {code: 63, nome: "Chuva Moderada", img: "/imagens/chuva.png"},
  {code: 65, nome: "Chuva Forte", img: "/imagens/chuva-forte.png"},
  {code: 66, nome: "Frio com Chuva Leve", img: "/imagens/chuva.png"},
  {code: 67, nome: "Frio com Chuva Forte", img: "/imagens/chuva-forte.png"},
  {code: 71, nome: "Queda de Neve Leve"},
  {code: 73, nome: "Queda de Neve Moderada"},
  {code: 75, nome: "Queda de Neve Forte"},
  {code: 77, nome: "Grãos de Neve"},
  {code: 80, nome: "Pancadas de Chuva Leve", img: "/imagens/chuva-forte.png"},
  {code: 81, nome: "Pancadas de Chuva Moderada", img: "/imagens/chuva-forte.png"},
  {code: 82, nome: "Pancadas de Chuva Violenta", img: "/imagens/chuva-forte.png"}
]

function Condicao(numero){
return condicoesTempo.filter(e => e.code == numero)
}


const resCond = Condicao(tempoCodigo)
const imagem = document.createElement("img");
imagem.className = "imagem-tempo"
imagem.src = resCond[0].img
imagem.style.width = "200px"
localImagem.insertAdjacentElement("afterbegin", imagem)
//

localCondicao.innerText = resCond[0].nome


console.log(resCond)

 //

 console.log(tempo)
})
.catch(e => console.log(e))


}

navigator.geolocation.getCurrentPosition(geoLocal)

btnRefresh.onclick = () => {
  localImagem.innerHTML = "";
  navigator.geolocation.getCurrentPosition(geoLocal)
}


///
setInterval(() => {
const horario = new Date()
const horas = horario.getHours()
const minutos = horario.getMinutes()
let diaString = ""


switch(horario.getDay()){
  case 0: diaString = "Domingo";
  break;
  case 1: diaString = "Segunda";
  break;
  case 2: diaString = "Terça";
  break;
  case 3: diaString = "Quarta";
  break;
  case 4: diaString = "Quinta";
  break;
  case 5: diaString = "Sexta";
  break;
  case 6: diaString = "Sábado";
  break;
}

function formatarHora(numero){
return numero < 10 ? "0"+numero : numero
}

visorData.innerText = `${diaString} | ${formatarHora(horas)}:${formatarHora(minutos)}`

},1000)

fetch(urlUf)
.then(res => res.json())
.then(json => {

 const uf = json.UF.forEach(e => {
  selectUF.innerHTML += `<option>${e.sigla}</option>`
 })

selectUF.onchange = (e) => {
  selectMunicipio.innerHTML = "";
  const filtro = e.target.value
  console.log(filtro)

//
fetch(urlMunicipios)
.then(res => res.json())
.then(json => {

const municipios = json.filter(e => e.uf === filtro)
console.log(municipios)

municipios.forEach(e => {
  selectMunicipio.innerHTML += `<option>${e.nome}</option>`
})
})
//
}

})




//Buscas Codigo Cidade
selectMunicipio.onchange = (e) => {
localImagem.innerHTML = "";
municipio = e.target.value
nomeCidade.innerHTML = municipio;
console.log(municipio)

fetch(urlCodigo)
.then(res => res.json())
.then(json => {

const codigo = json.filter(e => e.nome === municipio)  
this.codigoFinal = codigo[0].codigo
console.log(codigoFinal)

})

//Busca Latitude Cidade
fetch(urlLatitude)
.then(res => res.json())
.then(json => {
  const latELong = json.filter(e => e.codigo === codigoFinal)
  const localFinal = `latitude=${latELong[0].latitude}&longitude=${latELong[0].longitude}`
 console.log(localFinal)
const urlFinal = urlPrevisao+localFinal

console.log("URL previsao: "+urlFinal)

// Buscas Dados Meteorologicos
fetch(urlFinal)
.then(res => res.json())
.then(json => {
 
 const tempo = json.current_weather;
 const temperatura = tempo.temperature;
 const veloVento = tempo.windspeed;
 const tempoCodigo = tempo.weathercode;

 visorTemperatura.innerText = temperatura.toFixed(0);

 //


 const condicoesTempo = [
  {code:0 , nome: "Céu Limpo", img: "/imagens/sol.png"},
  {code: 1, nome: "Principalmente Claro", img: "/imagens/sol-poucas-nuvens.png"},
  {code: 2, nome: "Parcialmente Nublado", img: "/imagens/sol-nuvens.png"},
  {code: 3, nome: "Nublado", img: "/imagens/nublado.png"},
  {code: 45, nome: "Nevoeiro", img: "/imagens/nublado-chuva.png"},
  {code: 48, nome: "Nevoeiro e Geada", img: "/imagens/nublado-chuva.png"},
  {code: 51, nome: "Garoa Leve", img: "/imagens/chuva.png"},
  {code: 53, nome: "Garoa Moderada", img: "/imagens/chuva.png"},
  {code: 55, nome: "Garoa Forte", img: "/imagens/chuva.png"},
  {code: 56, nome: "Frio com garoa leve", img: "/imagens/chuva.png"},
  {code: 57, nome: "Frio com garoa forte", img: "/imagens/chuva.png"},
  {code: 61, nome: "Chuva Leve", img: "/imagens/chuva.png"},
  {code: 63, nome: "Chuva Moderada", img: "/imagens/chuva.png"},
  {code: 65, nome: "Chuva Forte", img: "/imagens/chuva-forte.png"},
  {code: 66, nome: "Frio com Chuva Leve", img: "/imagens/chuva.png"},
  {code: 67, nome: "Frio com Chuva Forte", img: "/imagens/chuva-forte.png"},
  {code: 71, nome: "Queda de Neve Leve"},
  {code: 73, nome: "Queda de Neve Moderada"},
  {code: 75, nome: "Queda de Neve Forte"},
  {code: 77, nome: "Grãos de Neve"},
  {code: 80, nome: "Pancadas de Chuva Leve", img: "/imagens/chuva-forte.png"},
  {code: 81, nome: "Pancadas de Chuva Moderada", img: "/imagens/chuva-forte.png"},
  {code: 82, nome: "Pancadas de Chuva Violenta", img: "/imagens/chuva-forte.png"}
]

function Condicao(numero){
return condicoesTempo.filter(e => e.code == numero)
}


const resCond = Condicao(tempoCodigo)
const imagem = document.createElement("img");
imagem.className = "imagem-tempo"
imagem.src = resCond[0].img
imagem.style.width = "200px"
localImagem.insertAdjacentElement("afterbegin", imagem)
//

localCondicao.innerText = resCond[0].nome


console.log(resCond)

 //

 console.log(tempo)
})
.catch(e => console.log(e))



})
}









