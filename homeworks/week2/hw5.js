function add(a,b){    
	var array1 = a.split("");    
	var array2 = b.split("");    
	var array3 = [];    
	if(array1.length==1){       
		console.log(Number(a)+Number(b)+"");    
	}else{
		for(var i=array1.length-1;i>=0;i--){    
			var num = Number(array1[i])+Number(array2[i]);       
			var lastnum = Number(array1[i+1])+Number(array2[i+1]);       
			var total = num + Math.floor(lastnum/10);    
			if(i!==array1.length-1&&i!==0){        
				array3.push(total%10);     
			}else if(i==0){        
				array3.push(total);      
			}else{       
				array3.push(num%10);      
			}    
		}    
		console.log(array3.reverse().join(""));  
	}      
}

module.exports = add;
