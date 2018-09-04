function stars(n) {
	var array = [];    
	var str = "";    
	for(var i=0;i<n;i++){       
		str+="*";       
		array.push(str);    
	}    
	console.log(array);
}

module.exports = stars;
