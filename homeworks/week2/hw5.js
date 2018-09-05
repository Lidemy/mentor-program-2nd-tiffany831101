function add(a, b) {
	var aToNumber = Number(a);    
	var bToNumber = Number(b);    
	var total = aToNumber+bToNumber;    
	return total.toString();  
}

module.exports = add;
