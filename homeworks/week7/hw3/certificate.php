<?php
function make_certificate($user_id,$conn){
    $stmt = $conn->prepare("SELECT * FROM users_certificate WHERE user_id = :user_id");
	$stmt->bindParam(':user_id', $user_id);
    $stmt->execute();
    //刪除先前的userid配的certificate，不然一個人會有多個通行證，每次都要還回去
    if( $stmt->rowCount()){
		$del_sql = "DELETE FROM users_certificate WHERE user_id = $user_id";
		$conn->exec($del_sql);
	}
    $certificate_num = md5(uniqid(rand()));
	$stmt = $conn->prepare("INSERT INTO users_certificate (user_id, certificate) VALUES (:user_id, :certificate)");
	$stmt->bindParam(':user_id', $user_id);
	$stmt->bindParam(':certificate', $certificate_num);
	$stmt->execute();
	return $certificate_num;
}

?>