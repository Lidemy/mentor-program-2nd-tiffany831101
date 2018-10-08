<?php
    require('conn.php');
    $time = date("Y/m/d")." ".date("h:i:sa");
	$sql = "INSERT INTO tiffanyhsu_comments (user_id, parent_id, content,time) VALUES ('{$_COOKIE['user_id']}', '{$_POST['parent_id']}','{$_POST['content']}','$time')";
	if( $conn->query($sql) === TRUE ){
		header("Location: ./index.php");
	}else{
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
?>