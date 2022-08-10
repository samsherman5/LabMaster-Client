const axios = require('axios');
const os = require("os");
const instance = axios.create({
	baseURL: 'http://localhost:3000',
	responseType: 'json'
});

/*
let url = `localhost:3000`;
const options = {
	method: "GET",
	url: url
};
axios(options).then(res => console.log(res));*/


instance.get('/users')
	.then(res => {
		console.log(res.data);
	});

instance.post('/init', {name: "test_pc", tstamp: new Date().toUTCString()})
	.then(res => {
		console.log(res.data);
		console.log(res.status);
	})
	.catch(err => {
		console.error(err);
	});


