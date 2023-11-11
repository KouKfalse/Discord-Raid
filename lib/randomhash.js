var libs = require('./Random.json');



function isFirst(names){
if(names == 'a'||names == 'i'||names == 'u'||names == 'e' || names == 'o' || names == 'A' || names =='I'||names == 'U'|| names == 'E'|| names == 'O'){
return true
}else{
return false
}
}


exports.generate = function (num){
var randomi = 0;
var isf = false;
var name = "";

//console.log(libs.random[61]);
for(var int = 0;int != 32;int++){
randomi = Math.floor(Math.random() * (61));


while(isf && (!isFirst(libs.random[randomi]))){
randomi = Math.floor(Math.random() * (61));
}
isf = false;

isf = !(isFirst(libs.random[randomi]));
name += libs.random[randomi];
}

return name;
};



