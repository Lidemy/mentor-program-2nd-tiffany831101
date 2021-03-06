<?php
//建立與資料庫的連結
require("conn.php");
require("certificate.php");
//檢查是否與資料庫的註冊資訊相同，帳號跟密碼都必須相同才可以，所以中間用and來做連結
$stmt =$conn->prepare("SELECT id, username, password FROM $users_table WHERE username = :username");
//result = 從資料庫之中搜尋($sql);
$stmt->bindParam(':username', $_POST['username']);
// $stmt->bindParam(':password', $_POST['password']);
$stmt->execute();
$stmt->setFetchMode(PDO::FETCH_ASSOC);
//如果剛好可以找到一排與註冊的帳號密碼相同的話
if($stmt->rowCount()===1){
    $row = $stmt->fetch();
    if(password_verify($_POST['password'], $row['password'])){
//現在時間加上一天，預設為跟目錄底下的都可以有這個cookie，前提是必須是相同瀏覽器
    
    $certificate_num = make_certificate($row['id'],$conn);
    // var_dump($_COOKIE);
    setcookie('certificate',$certificate_num,time()+3600*24);
    //用exit()或die()會比只用echo好，因為萬一後面有繼續再跑的邏輯，會出現箭頭(enter格)
    exit("ok");
    }else{
		exit('error');
	}
	
}else{
	exit('error');
};

?>