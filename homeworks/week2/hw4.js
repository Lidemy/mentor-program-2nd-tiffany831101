function isPalindromes(str) {
var oppositeStr = "";
   for(var i=str.length-1;i>=0;i--){
      oppositeStr+=str[i];
   }
   if(oppositeStr==str){
      return true;
   }else{
      return false;
   }
}

module.exports = isPalindromes
