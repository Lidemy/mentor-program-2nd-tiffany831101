<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css">
</head>
<body>

<div class="row">
	<div class="col-12">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<a class="navbar-brand" href="#">Navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarColor02">
				<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Features</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Pricing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About</a>
				</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
				<input class="form-control mr-sm-2" type="text" placeholder="Search">
				<button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
	</nav>
</div>

</div>

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