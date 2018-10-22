<?php
require('conn.php');
$time = date("Y/m/d")." ".date("h:i:sa");
$stmt = $conn->prepare("UPDATE $cmmts_table SET content = :content,time = :time WHERE id = :cmmt_id");
$stmt->bindParam(':cmmt_id', $_POST['cmmt_id']);
$stmt->bindParam(':content', $_POST['content']);
$stmt->bindParam(':time',$time);
if( $stmt->execute() ){
	echo 'modified';
}else{
	echo 'error';
}




?>