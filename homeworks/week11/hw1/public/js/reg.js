var loginBtn = document.querySelector('.login__btn');
var username = document.querySelector('[name=username]');
var password = document.querySelector('[name=password]');
var nickname = document.querySelector('[name=nickname]');
loginBtn.addEventListener('click', function () {
    if (checkifnull(username.value) && checkifnull(password.value) && checkifnull(nickname.value)) {
        var req = new XMLHttpRequest();
        //這邊要送post的方式傳送到chk_login.php，用非同步的方式

        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                console.log(req.responseText);
                if (req.responseText === 'error') showInfo('', '帳號或暱稱已有人使用！');
                //註冊完成，轉回首頁
                if (req.responseText === 'ok') {
                    showInfo('', '註冊成功');
                    // document.location.href = 'index.php';
                    document.location.href = '/index';
                }
            }
        };
        req.open('POST', '/reg', true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send('username=' + username.value + '&password=' + password.value + '&nickname=' + nickname.value);
    } else {
        if (!checkifnull(username.value)) {
            showInfo(username, '請確實填寫');
        }
        if (!checkifnull(password.value)) {
            showInfo(password, '請確實填寫');
        }
        if (!checkifnull(nickname.value)) {
            showInfo(nickname, '請確實填寫');
        }
    }
});

document.querySelector('.input_box').addEventListener('click', function (e) {
    //如果點擊到的是class叫做login__input的話
    if (e.target.className == 'login__input') {
        document.querySelector('.login__warning').innerHTML = '';
        document.querySelector('.login__warning').style.display = 'none';
        username.style.borderColor = 'lightgray';
        password.style.borderColor = 'lightgray';
        nickname.style.borderColor = 'lightgray';
    }
});

function checkifnull(inputValue) {
    if (inputValue === '') {
        return false;
    } else {
        return true;
    }
}

//顯示提示的資訊(ex帳號是否重複?)
function showInfo(field, info) {
    console.log(info);
    document.querySelector('.login__warning').innerHTML = info;
    document.querySelector('.login__warning').style.display = 'block';
    if (field !== '') {
        field.style.borderColor = 'salmon';
    }
}