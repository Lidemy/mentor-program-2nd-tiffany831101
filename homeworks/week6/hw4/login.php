<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="login_container">
    <div class="login_header">登入</div>
        <div class="input_box">

				<div class="login__title">使用者名稱：</div>
				<input class="login__input" name="username" type="text" placeholder="帳號" /><br>

				<div class="login__title">密碼：</div>
				<input class="login__input" name="password" type="password" placeholder="密碼" /><br>

				<div class="login__warning"></div>
				<input class="login__btn" type="button" value="Sign In" />

				<div class="pressReg"><a href="reg.php">還沒有帳號嗎？點我註冊</a></div>				
		</div>
</div>
<script src="./login.js"></script>
</body>
</html>