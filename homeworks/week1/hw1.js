function printStars(n) {
var str = ""; 
for(var i=0;i<n;i++){    
if(i!==n-1){
	str+= "*"    
	str+="\n";   
}
else{
	str+="*"
} 
} 
console.log(str);
}  

