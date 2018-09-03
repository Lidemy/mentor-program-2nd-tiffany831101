function reverse(str) {
    var newstr = str.split("");
    // console.log(newstr);
    var array = [];
    for (var i = newstr.length - 1; i >= 0; i--) {
        array.push(newstr[i]);
    }
    console.log(array.join(""));
}