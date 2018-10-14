<?php
//建立與資料庫之間的連結，用PDO的方式，可以使用預處理的方式
$servername = "166.62.28.131";
$username = "student2nd";
$password = "mentorstudent123";
$dbname = "mentor_program_db";
$cmmts_table = "tiffanyhsu_comments";
$users_table = "tiffanyhsu_users";
$certificates_table = "tiffanyhsu_users_certificate";
try{
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->query('SET NAMES "utf8"'); 
	$conn->query('SET time_zone = "+08:00"');
	//PDO有三種錯誤模式，例外、無生跟警告
	//1. 例外模式，建議用這個方式，只要有錯誤就會被丟到例外去
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
	echo "Connected Failed: " . $e->getMessage();
}

?>
