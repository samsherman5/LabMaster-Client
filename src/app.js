const axios = require('axios');
const instance = axios.create({
	baseURL: 'http://localhost:3000',
	responseType: 'json'
})

/*
let url = `localhost:3000`;
const options = {
	method: "GET",
	url: url
};
axios(options).then(res => console.log(res));*/

instance.post('/ping', {})
	.then(res => {
		console.log(res.data);
		console.log(res.status);
	})
	.catch(err => {
		console.log(err);
	});
