const alert = require('alert');

const options = {
	"linux": "dialog",
	"darwin": "osascript",
	"win32": "msg"
};

exports.create_window = async function create_window(text, tcolor, fullscreen, bcolor) {
	alert(text, options[process.platform]);
};
