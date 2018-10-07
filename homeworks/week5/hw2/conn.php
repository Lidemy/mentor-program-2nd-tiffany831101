<?php
//建立與資料庫之間的連結，用new mysqli()的方式
$servername = "166.62.28.131";
$username = "student2nd";
$password = "mentorstudent123";
$dbname = "mentor_program_db";
$cmmts_table = "tiffanyhsu_comments";
$users_table = "tiffanyhsu_users";
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");
if( $conn->connect_error ){
	die("Connect Fails: " . $conn->connect_error);
};
?>