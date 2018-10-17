<?php
//這邊要寫的是從資料庫抓來的東西有沒有根輸入的值相同
require('conn.php');
require('./certificate.php');
$passwordHash = password_hash(
       $_POST['password'],
       PASSWORD_DEFAULT,
       ['cost' => 12]
    );
    if ($passwordHash === false) {
        throw new Exception('Password hash failed');
    }
$chk_stmt = $conn->prepare("SELECT username, nickname FROM tiffanyhsu_users WHERE username=:username OR nickname=:nickname");
$chk_stmt->bindParam(':username',$_POST['username']);
$chk_stmt->bindParam(':nickname',$_POST['nickname']);
// $hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$chk_stmt->execute();
//設定fetch的方式為字串行陣列
$chk_stmt->setFetchMode(PDO::FETCH_ASSOC);
if( $chk_stmt->rowCount()==0){
	$reg_stmt = $conn->prepare("INSERT INTO $users_table (username, password, nickname) ".
								"VALUES (:username, :password, :nickname)");
	$param = [
		':username' => $_POST['username'],
		':password' => $passwordHash,
		':nickname' => $_POST['nickname']
	];
	if( $reg_stmt->execute($param)){
		$certificate_num = make_certificate($conn->lastInsertId(), $conn);
		setCookie('certificate',$certificate_num,time()+3600*24);
		// setcookie('user_id', $conn->lastInsertId(), time()+3600*24);
		exit("ok");
	}
}else{
	while($chk_row = $chk_stmt->fetch()){

		if(!strcasecmp( $chk_row['username'], $_POST['username']) AND !strcasecmp( $chk_row['nickname'], $_POST['nickname'] ) ){
			exit('both_err');
			//重複的帳號暱稱在同一列
		}else if( !strcasecmp( $chk_row['nickname'], $_POST['nickname'] ) ){
			exit('n_err');
		}else if( !strcasecmp( $chk_row['username'], $_POST['username'] ) ){
			exit('u_err');
			//重複帳號暱稱若在不同列，會分別回傳n_err和u_err
		}
	}
}
?>





