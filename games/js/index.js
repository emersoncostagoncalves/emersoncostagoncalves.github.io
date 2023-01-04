const url = "https://api.igdb.com/v4/games/"
const id = "2vtciavibny7afa5wglh1vs4efh0kd"
const token = "tiibkj4lz98kurjy6itupoxwgto3fd"

const credentials = `https://id.twitch.tv/oauth2/token?client_id=${id}&client_secret=${token}&grant_type=client_credentials`

const options = {
    method: "POST",

}

fetch(credentials, options)
    .then(resp => resp.json())
    .then(dados => {
        const acessToken = dados.access_token
        console.log(acessToken)
        //




        const encodedParams = new URLSearchParams();
encodedParams.append("gameIds", "<REQUIRED>");
encodedParams.append("requestUrl", "<REQUIRED>");
encodedParams.append("userKey", acessToken);

const options2 = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Client-ID': id,
		'Authorization': `Bearer ${acessToken}`
	},
	body: encodedParams
};

fetch(url, options2)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
})

