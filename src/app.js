const axios = require('axios');
const os = require("os");
const fs = require('fs');
const {sleep} = require('./utils/sleep');
const {create_window} = require("./api/Interaction");

const instance = axios.create({
	baseURL: 'http://localhost:3000',
	responseType: 'json'
});

const DATAPATH = './data'

const setup = async () => {
	if(fs.existsSync(DATAPATH)){
		console.log("Data folder already exists...")
	} else {
		console.log("Creating data folder");
		fs.mkdirSync(DATAPATH);
	}

	if(fs.existsSync(`${DATAPATH}/id.file`)){
		console.log("Client has connected in the past...");
	} else {
		console.log("Pinging init function...");
		await instance.post('/init', {name: os.hostname(), tstamp: new Date().toUTCString()})
			.then(res => {
				console.log("Identified with server")
				fs.writeFileSync(`${DATAPATH}/id.file`, res.data.addedPC._id, err => {
					console.error("Error writing key to file", err);
					process.exit(1);
				});
				console.log(`Client ID written to ${DATAPATH}/id.file`);
			})
			.catch(err => {
				console.error(err);
				process.exit(1);
			});
	}

	const CLIENTID = fs.readFileSync(`${DATAPATH}/id.file`, err => {
		console.error(err);
	});

	while(true){
		await instance.get('/ping', {headers: {id: CLIENTID}}).then(() => {
			console.log("Pinged server.")
		});
		await sleep(20000);
	}
}

setup().then(r => console.log('ended'));


/*
let url = `localhost:3000`;
const options = {
	method: "GET",
	url: url
};
axios(options).then(res => console.log(res));*/
/*
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


*/
