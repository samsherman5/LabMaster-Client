const {create_window} = require("./api/Interaction");

console.log("hello");
create_window("test", "", false, "009688").catch(err => console.error(err));
