function printFactor(n) {     
	var str = "";     
	for (var i = 1; i <= n; i++) {         
		if (n % i == 0) {             
			if (i != n) {                 
				str += i;                 
				str += "\n"             
			} else {                 
				str += i;             
			}          
		}     
	}    
	console.log(str) 
}
