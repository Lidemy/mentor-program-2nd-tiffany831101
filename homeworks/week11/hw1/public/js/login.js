var container = document.getElementsByClassName("login_container")[0];
container.addEventListener("click", function (e) {
    console.log(e);
    var uInput = document.querySelector("[name=username]");
    console.log(uInput);
    var pInput = document.querySelector("[name=password]");
    console.log(pInput);
    //這邊代表有點到那個submit btn
    if (e.target.className == "btn btn-outline-secondary mt-5") {
        //先檢查資料是否都有填寫完畢
        console.log(e.target);
        if (checkifnull(uInput.value) && checkifnull(pInput.value)) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/login", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send('username=' + uInput.value + '&password=' + pInput.value);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.responseText === "ok") {
                        showInfo("", "登入成功");
                        document.location.href = '/';
                    } else if (this.responseText === "pwderror") {
                        showInfo("", "密碼 錯誤！")
                    } else if (this.responseText === "accerror") {
                        showInfo("", "帳號 錯誤！")
                    }
                };
            };
        } else {
            if (!checkifnull(uInput.value)) {
                showInfo(uInput, "請確實填寫")
            };
            if (!checkifnull(pInput.value)) {
                showInfo(pInput, "請確實填寫")
            }
        }
    }
});


document.querySelector(".input_box").addEventListener("click", function (e) {
    //如果點擊到的是class叫做login__input的話
    if (e.target.className == "login__input") {
        document.querySelector(".login__warning").innerHTML = "";
        document.querySelector(".login__warning").style.display = "none";
        uInput.style.borderColor = "lightgray";
        pInput.style.borderColor = "lightgray";
    };
})

//檢查是否有填寫資料
function checkifnull(inputValue) {
    if (inputValue === "") {
        return false;
    } else {
        return true;
    }
}

//顯示提示的資訊(ex帳號是否重複?)
function showInfo(field, info) {
    console.log(info);
    document.querySelector(".login__warning").innerHTML = info;
    document.querySelector(".login__warning").style.display = "block";
    if (field !== "") {
        field.style.borderColor = "salmon"
    };
}