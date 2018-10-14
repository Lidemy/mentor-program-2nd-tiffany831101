<?php
require('./conn.php');
$stmt = $conn->prepare('DELETE FROM tiffanyhsu_comments WHERE id = :cmmt_id OR parent_id = :cmmt_id');

$stmt->bindParam(':cmmt_id',$_POST['cmmt_id']);
$stmt->bindParam(':parent_id',$_POST['cmmt_id']);

if($stmt->execute()){
    exit("deleted");
}else{
    exit("error");
}

?>