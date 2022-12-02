const moedas= "https://economia.awesomeapi.com.br/json/available/uniq"
const moedaSource = document.querySelector("#moeda-source")
const moedaTarget= document.querySelector("#moeda-target")

fetch(moedas)
.then(resp => resp.json())
.then(resp => 
	{
		
		Object.values(resp).sort().forEach(el => {

const target = document.createElement("option")
target.innerText = el

moedaTarget.appendChild(target)



		})
		moedaSource.onchange = e => {
			if(moedaSource && moedaTarget){
				Converter(moedaSource.value, moedaTarget.value, resp)
			}
		}
		moedaTarget.onchange = e => {
			if(moedaSource && moedaTarget){
				Converter(moedaSource.value, moedaTarget.value, resp)
			}
		}
	})

function Converter(source, target, moedas){
	const codTarget = Object.entries(moedas).filter(el => el[1] === target)
    console.log("Moeda: "+source)
	console.log("Moeda: "+codTarget[0][0])
	

	let url = "https://economia.awesomeapi.com.br/last/"
	url += source+"-"+codTarget[0][0]


fetch(url)
.then(resp => resp.json())
.then(resp => {
const valorCompra = document.querySelector("#valor-compra")
const valorVenda = document.querySelector("#valor-venda")


valorCompra.innerText = Object.entries(resp)[0][1].codein+" "+Object.entries(resp)[0][1].ask
valorVenda.innerText = Object.entries(resp)[0][1].codein+" "+Object.entries(resp)[0][1].bid



	console.log(resp)
	console.log(resp.message)
})
.catch(e => console.log(e))
}