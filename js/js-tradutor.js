
const selectSource = document.querySelector("#source-language")
const selectTarget = document.querySelector("#target-language")
const sourceTextArea = document.querySelector("#source-area")
const targetTextArea = document.querySelector("#target-area")


const options = {
    method: 'GET',
    headers: {
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '5f1a735d88msh53db9721b1575e2p15521cjsnb187a070af8b',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }
};


// Get Languages
fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', options)
    .then(response => response.json())
    .then(response => {


        // Add languages select source
            response.data.languages.forEach(el => {
            const option = document.createElement("option")
            option.innerText = el.language
            selectSource.append(option)
        })

        // Add languages select target
        response.data.languages.forEach(el => {
            const option = document.createElement("option")
            option.innerText = el.language
            selectTarget.append(option)
        })

        console.log(response.data.languages)

    })
    .catch(err => console.error(err));




// Detect

const encodedParams = new URLSearchParams();
encodedParams.append("q", "English is hard, but detectably so");

const options2 = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '5f1a735d88msh53db9721b1575e2p15521cjsnb187a070af8b',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




    // Translate


sourceTextArea.oninput = e => {
    traduzir(selectSource.value, selectTarget.value, sourceTextArea.value);
}

targetTextArea.oninput = e => {
    traduzir(selectSource.value, selectTarget.value, sourceTextArea.value);
}

selectSource.onchange = e => {
    traduzir(e.target.value, selectTarget.value, sourceTextArea.value);
}

selectTarget.onchange = e => {
    traduzir(selectSource.value, e.target.value, sourceTextArea.value);
}


function traduzir(source, target, text) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source", source);
    encodedParams.append("target", target);
    encodedParams.append("q", text);

    const options3 = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '5f1a735d88msh53db9721b1575e2p15521cjsnb187a070af8b',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options3)
        .then(response => response.json())
        .then(response => {

            targetTextArea.innerText = response.data.translations[0].translatedText
            console.log(response.data.translations[0].translatedText)

        })
        .catch(err => console.error(err));
}

