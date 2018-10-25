<?php
//建立與資料庫之間的連結，用PDO的方式，可以使用預處理的方式
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hw3";
$cmmts_table = "comments";
$users_table = "users";
$certificates_table = "users_certificate";
try{
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->query('SET NAMES "utf8"');  
	$conn->query('SET time_zone = "+07:00"');
	//PDO有三種錯誤模式，例外、無生跟警告
	//1. 例外模式，建議用這個方式，只要有錯誤就會被丟到例外去
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
	echo "Connected Failed: " . $e->getMessage();
}

?>
