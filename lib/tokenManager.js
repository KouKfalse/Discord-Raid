const config = require("../config.json")
let tokens = [];

function init() {
tokens = config.tokens;
return 
}

init();

exports.tokenSplit = function (){
return tokens[Math.floor(Math.random() * (tokens.length))
]
}
exports.tokenPP = function (process){
return tokens[process]
}
exports.tokenRaw = function (){
return tokens
}
