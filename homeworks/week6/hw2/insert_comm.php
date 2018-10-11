<?php
require('conn.php');
//使用預處理的方式
$stmt = $conn->prepare("INSERT INTO $cmmts_table (user_id, parent_id, content,time)" .
					"VALUES (:user_id, :parent_id , :content, :time)");
$time = date("Y/m/d")." ".date("h:i:sa");
//再次綁定參數
$stmt->bindParam(':user_id', $_COOKIE['user_id']);
$stmt->bindParam(':parent_id', $_POST['parent_id']);
$stmt->bindParam(':content', $_POST['content']);
$stmt->bindParam(':time', $time);
if( $stmt->execute() ){
	header("Location: ./index.php");
}
$conn->close();
?>