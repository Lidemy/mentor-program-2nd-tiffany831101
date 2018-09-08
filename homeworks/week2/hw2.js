function alphaSwap(str) {
var newstr = "";     
	for(var i=0;i<str.length;i++){      
		if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){          
			newstr+=str[i].toLowerCase();       
		}else if(str.charCodeAt(i)>=97&&str.charCodeAt(i)<=122){        
			newstr+=str[i].toUpperCase();       
		}else{          
			newstr+=str[i];       
		}      
	}     
	return newstr;  
}

module.exports = alphaSwap
