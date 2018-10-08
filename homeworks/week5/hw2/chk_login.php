<?php
//建立與資料庫的連結
require("conn.php");
//檢查是否與資料庫的註冊資訊相同，帳號跟密碼都必須相同才可以，所以中間用and來做連結
$sql = "SELECT id, username, password FROM $users_table WHERE username = '" . $_POST['username']."'" .
            "AND password = '" . $_POST['password'] . "'";
//result = 從資料庫之中搜尋($sql);
$result = $conn->query( $sql );
//如果剛好可以找到一排與註冊的帳號密碼相同的話
if($result->num_rows==1){
    $row = $result->fetch_assoc();
    //現在時間加上一天，預設為跟目錄底下的都可以有這個cookie，前提是必須是相同瀏覽器
    setcookie('user_id',$row['id'],time()+1*24*3600);
    //用exit()或die()會比只用echo好，因為萬一後面有繼續再跑的邏輯，會出現箭頭(enter格)
    exit("ok");
}else{
    exit("error");
};      

?>