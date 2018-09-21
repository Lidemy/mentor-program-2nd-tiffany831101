var inputEmail = document.getElementById("inputEmail");
var inputName = document.getElementById("inputName");
var isEngineer = document.getElementsByName("engineerType");
var inputBg = document.getElementById("inputBg");
var inputOther = document.getElementById("inputOther");
var submitBtn = document.getElementById("submit");
var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
var count = 2;
//當輸入框失去焦點時，會判斷email是否為正確格式
function checkemail(email) {
    //validate ok or not
    if (email !== "") {
        if (email.search(emailRule) != -1) {
            document.getElementById("emailWrong").style.display = "none";
            document.getElementById("emailForm").style.background = "white";
            document.getElementById("emailNoValue").classList.add("invisible");
        } else {
            document.getElementById("emailWrong").style.display = "block";
            document.getElementById("emailForm").style.background = "rgb(255, 214, 214)"
            document.getElementById("emailNoValue").classList.add("invisible");
        }
    } else {
        document.getElementById("emailWrong").style.display = "none";
        document.getElementById("emailNoValue").classList.remove("invisible");
        document.getElementById("emailForm").style.background = "rgb(255, 214, 214)"
    }

}

//當輸入框失去焦點時，會判斷name是否為空
function checkName(name) {
    if (name == "") {
        document.getElementById("nameNoValue").classList.remove("invisible");
        document.getElementById("nameForm").style.background = "rgb(255, 214, 214)"
    } else {
        document.getElementById("nameNoValue").classList.add("invisible");
        document.getElementById("nameForm").style.background = "white";
    }
}

//當選項都沒有按的時候，會判斷是否為空

//跟上述一樣的做法
function checkBg(bg) {
    if (bg == "") {
        document.getElementById("bgNoValue").classList.remove("invisible");
        document.getElementById("bgForm").style.background = "rgb(255, 214, 214)"
    } else {
        document.getElementById("bgNoValue").classList.add("invisible");
        document.getElementById("bgForm").style.background = "white";
    }
}

function checkOther(other) {
    if (other == "") {
        document.getElementById("otherNoValue").classList.remove("invisible");
        document.getElementById("otherForm").style.background = "rgb(255, 214, 214)"
    } else {
        document.getElementById("otherNoValue").classList.add("invisible");
        document.getElementById("otherForm").style.background = "white";
    }
}



//按鈕送出之後，如果不符合就會跳出函式 return false
submitBtn.onclick = function () {
    //email不得為空
    if (inputEmail.value == "") {
        document.getElementById("emailNoValue").classList.remove("invisible");
        document.getElementById("emailForm").style.background = "rgb(255, 214, 214)"
        return false;
    } else if (inputEmail.value !== "") {
        document.getElementById("emailNoValue").classList.add("invisible");
        document.getElementById("emailForm").style.background = "white";
        if (inputEmail.value.search(emailRule) == -1) {
            document.getElementById("emailWrong").style.display = "block";
            document.getElementById("emailForm").style.background = "rgb(255, 214, 214)"
            return false
        }
    }

    //名字不得為空
    if (inputName.value == "") {
        document.getElementById("nameNoValue").classList.remove("invisible");
        document.getElementById("nameForm").style.background = "rgb(255, 214, 214)"
        return false;
    } else if (inputName.value !== "") {
        document.getElementById("nameNoValue").classList.add("invisible");
        document.getElementById("nameForm").style.background = "white";
    }

    if (isEngineer[0].checked == false && isEngineer[1].checked == false) {
        document.getElementById("typeNoValue").classList.remove("invisible");
        document.getElementById("typeForm").style.background = "rgb(255, 214, 214)"
        return false;
    } else {
        document.getElementById("typeNoValue").classList.add("invisible");
        document.getElementById("typeForm").style.background = "white";
    }

    if (inputBg.value == "") {
        document.getElementById("bgNoValue").classList.remove("invisible");
        document.getElementById("bgForm").style.background = "rgb(255, 214, 214)"
        return false;
    } else if (inputBg.value !== "") {
        document.getElementById("bgNoValue").classList.add("invisible");
        document.getElementById("bgForm").style.background = "white";
    }

    if (inputOther.value == "") {
        document.getElementById("otherNoValue").classList.remove("invisible");
        document.getElementById("otherForm").style.background = "rgb(255, 214, 214)"
        return false;
    } else if (inputOther.value !== "") {
        document.getElementById("otherNoValue").classList.add("invisible");
        document.getElementById("otherForm").style.background = "white";
    }
    alert("提交成功");
    console.log(inputEmail.value, inputName.value, checkEngineer(), inputBg.value, inputOther.value);
}
//檢查radio選項的value
function checkEngineer() {
    if (isEngineer[0].checked) {
        return isEngineer[0].value;
    } else if (isEngineer[1].checked) {
        return isEngineer[1].value;
    }
}