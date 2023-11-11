const config = require('./config.json')
const tokenM = require('./lib//tokenManager')
const MyRandomlib = require('./lib//randomhash')
const target_cid = config.channel
const content = config.contents
const Random = config.random
const forRate = config.rate;
let Random_length = config.random_length
let token_p = "";



// nonce 1000000000000000000
function RandomGen(){
if(Random){
 return MyRandomlib.generate(Random_length)
}else{
 return "";
}
}

for(var i = 0;i != tokenM.tokenRaw.length+1;i++){
token_p = tokenM.tokenPP(i);
for(var i2 = 0;i2 != forRate;i2++){
fetch("https://discord.com/api/v9/channels/"+target_cid+"/messages", {
  "headers": {
    "accept": "*/*",
    "authorization":token_p,
    "content-type": "application/json",
    "Referer": "https://discord.com/channels/1172578943686164531/1172578944944439358",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"mobile_network_type\":\"cellular\",\"content\":\""+content+RandomGen()+"\",\"nonce\":\""+Math.floor(Math.random() *(1000000000000000000))+"\",\"tts\":false,\"flags\":0}",
  "method": "POST"
});
}
}