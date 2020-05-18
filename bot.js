const Twit = require("twit");
const config = require("./config.js");

let T = new Twit(config);
console.log(T);
