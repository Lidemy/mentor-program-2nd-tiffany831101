function printFactor(n) {
    var array = [];
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            array.push(i);
        }
    }
    console.log(array);
}