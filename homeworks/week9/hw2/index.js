function Stack(){    
	var array = [];    
	this.pop = function(){    
		return array.pop();    
	};    
	this.push = function(a){    
		array.push(a);    
	}; 
}   
function Queue(){    
	var array = [];    
	this.pop = function(){       
		return array.shift()    
	}     
	this.push = function(a){       
		array.push(a);    
	} 
}
