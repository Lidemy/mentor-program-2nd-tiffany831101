function isPrime(n) {
	var array=[];    
	for(var i=1;i<=n;i++){    
		if(n%i==0){       
			array.push(i);    
		} 
	}    
	if(array.length==2){       
		return true;    
	}else{       
		return false;    
	}
}

module.exports = isPrime
