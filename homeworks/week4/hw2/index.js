var submitBtn = document.getElementById("submit");
var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
var input = document.getElementsByTagName("input");
console.log(input);
//當輸入框失去焦點時，會判斷email是否為正確格式
function checkemail(email) {
    if (email.value !== "") {
        if (email.value.search(emailRule) != -1) {
            email.nextElementSibling.nextElementSibling.style.display = "none";
            email.parentElement.style.background = "white";
            email.nextElementSibling.classList.add("invisible");
        } else {
            email.nextElementSibling.nextElementSibling.style.display = "block";
            email.parentElement.style.background = "rgb(255, 214, 214)"
            email.nextElementSibling.classList.add("invisible");
        }
    } else {
        email.nextElementSibling.nextElementSibling.style.display = "none";
        email.nextElementSibling.classList.remove("invisible");
        email.parentElement.style.background = "rgb(255, 214, 214)"
    }

}

//當輸入框失去焦點時，會判斷每個值是否為空
function check(element) {
    if (element.value == "") {
        element.nextElementSibling.classList.remove("invisible");
        element.parentElement.style.background = "rgb(255, 214, 214)";
    } else {
        element.nextElementSibling.classList.add("invisible");
        element.parentElement.style.background = "white";
    }
}


//按鈕送出之後，如果不符合就會跳出函式 return false
submitBtn.onclick = function () {
    for (var i = 0; i < input.length - 1; i++) {
        if (i == 0) {
            if (input[i].value == "") {
                input[i].nextElementSibling.classList.remove("invisible");
                input[i].parentElement.style.background = "rgb(255, 214, 214)";
                return false;
            } else if (input[i].value !== "") {
                input[i].nextElementSibling.classList.add("invisible");
                input[i].parentElement.style.background = "white";
                if (inputEmail.value.search(emailRule) == -1) {
                    input[i].nextElementSibling.nextElementSibling.style.display = "block";
                    input[i].parentElement.style.background = "rgb(255, 214, 214)"
                    return false
                }
            }
        }
        if (i == 2) {
            continue
        } else if (i == 3) {
            if (input[i - 1].checked == false && input[i].checked == false) {
                input[i].nextElementSibling.classList.remove("invisible");
                input[i].parentElement.style.background = "rgb(255, 214, 214)"
            } else {
                input[i].nextElementSibling.classList.add("invisible");
                input[i].parentElement.style.background = "white";
            }
        } else {
            if (input[i].value == "") {
                input[i].nextElementSibling.classList.remove("invisible");
                input[i].parentElement.style.background = "rgb(255, 214, 214)";
                return false;
            } else if (input[i].value !== '') {
                console.log(input[i].nextElementSibling);
                input[i].nextElementSibling.classList.add("invisible");
                input[i].parentElement.style.background = "white";
            }
        }

    }
    alert("提交成功");
    for (var i = 0; i < input.length - 1; i++) {
        if (i == 2) {
            continue;
        } else if (i == 3) {
            if (input[i - 1].checked) {
                console.log(input[i - 1].value);
            } else if (input[i].checked) {
                console.log(input[i].value);
            }
        } else {
            console.log(input[i].value);
        }
    }
}