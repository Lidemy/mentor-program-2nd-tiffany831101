<?php
//這邊要寫的是從資料庫抓來的東西有沒有根輸入的值相同
require('conn.php');

$chk_sql = "SELECT username, nickname FROM tiffanyhsu_users WHERE username = '" . $_POST['username']."'" .
			"OR nickname = '" . $_POST['nickname'] . "'";

$chk_result = $conn->query( $chk_sql );
if( $chk_result->num_rows === 0 ){
	$reg_sql = "INSERT INTO tiffanyhsu_users (username, password, nickname) VALUES ('" .
				addslashes($_POST['username']) . "','" .  addslashes($_POST['password']) .
				"','" . addslashes($_POST['nickname']) ."')";
	if( $conn->query($reg_sql) === TRUE ){
		setcookie('user_id', $conn->insert_id, time()+3600*24);
		exit('ok');
	}
}else{
	while( $chk_row = $chk_result->fetch_assoc() ){

		if( !strcasecmp( $chk_row['username'], $_POST['username'] ) AND !strcasecmp( $chk_row['nickname'], $_POST['nickname'] ) ){
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





