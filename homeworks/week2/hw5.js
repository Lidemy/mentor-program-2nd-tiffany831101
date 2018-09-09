function add(a,b){ 
	var array1 = a.split("");     
	var array2 = b.split("");     
	var array3 = [];     
	var minus12 = array1.length - array2.length;     
	var minus21 = array2.length - array1.length;     
	if (array1.length > array2.length) {         
		for (var i = 0; i < minus12; i++) {             
			array2.unshift("0");         
		}      
	} else if (array2.length > array1.length) {         
		for (var i = 0; i < minus21; i++) {             
			array1.unshift("0");         
		}     
	} 
	console.log(array1);    
	console.log(array2);     
	for(var i=0;i<array1.length;i++){        
		array3.push(Number(array1[i])+Number(array2[i]));     
	}    
	console.log(array3);     
	var array4=[];    
	for(var i=array3.length-1;i>=0;i--){ 
		if(i==array3.length-1){    
			array4.unshift(array3[i]) 
		}else{ 
			if(array3[i+1]>=10){       
				array3[i]+=1;       
				array4.unshift(array3[i]);    
			}else{       
				array4.unshift(array3[i]);   
			}    
		}  
	}    
	console.log(array4);  
	var array5=[];  
	for(var i=0;i<array4.length;i++){    
		if(i!==0){      
			array5.push((array4[i]%10)+"");    
		}else{array5.push(array4[i]+"")}   
	}  
	return array5.join("");      
}

module.exports = add;
