const alert = require('alert');

const platform = {
	"linux": "dialog",
	"darwin": "osascript",
	"win32": "cscript"
};

exports.create_alert_window = async function create_window(text) {
	alert(text, platform[process.platform]);
};

exports.run_batch = async function run_batch(){

};

exports.black_screen = function black_screen(){
	//TODO: not implemented
}
