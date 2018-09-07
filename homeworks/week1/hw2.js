function capitalize(str) {    
	if(str.charCodeAt(0)>=97&&str.charCodeAt(0)<=122){   
		var newstr = str[0].toUpperCase();
		for(var i=1;i<str.length;i++){    
			newstr+=str[i];    
			return newstr; 
		} 
	}else{    
		return str;  
	}   
}
