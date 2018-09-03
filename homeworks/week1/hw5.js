function join(str, concatStr) {
    var newstr = "";
    for (var i = 0; i < str.length; i++) {
        if (i !== str.length - 1) {
            newstr += str[i];
            newstr += concatStr;
        } else {
            newstr += str[i];
        }
    }
    return newstr;
}

function repeat(str, times) {
    var newstr = "";
    for (var i = 0; i < times; i++) {
        newstr += str;

    }
    return newstr;
}