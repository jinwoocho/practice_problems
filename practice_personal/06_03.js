// make password stuff that has 20~50 letters,
//     atleast 1 uppercase,
//     atleast 1 lowercase,
//     and include '$#?!@&',
//     atleast 1 number,
//

var string = 'a1A#sdfasdfasdf31094ds';
var specialCheck = '$#?!@&';
var special = null;
var lower = null;
var upper = null;
function password(){
    for (var i = 0; i <string.length; i++){
        for(var x = 0;x < specialCheck.length;x++){
            if(string[i] === specialCheck[x]){
                special = 'on';
            }
        }
        if(string[i] == string[i].toLowerCase() || string[i] == string[i].toUpperCase()){
            lower = 'on';
            upper = 'on';
        }
    }
    if(!isNaN(string[0])){
        return false;
    }
    if(string.length >= 20 && string.length <=  50){
        if( special ==='on' && lower === 'on' && upper ==='on'){
            return true;
        }else{return false}
    }else {
        return false;
    }
}

password();