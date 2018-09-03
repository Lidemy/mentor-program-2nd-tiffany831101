function printStars(n) {
var str = ""; 
var newnum = (n+1)*n/2; 
for(var i=1;i<=newnum;i++){    
if(i!==newnum){
	str+= "*"    
	str+="\n";   
}
else{
	str+="*"
} 
} 
console.log(str);
}  

