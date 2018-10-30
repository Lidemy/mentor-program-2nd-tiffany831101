<?php
require("./conn.php");
$dbname = "hw3";
$item=$_POST["item"];
try {
    $conn->beginTransaction();
   
    $item_situation='';
    for($i=0; $i<count($item); $i++){
		$statement="SELECT amount,item FROM products where id=$item[$i] for update";
        $result = $conn->query($statement);
        $result ->setFetchMode(PDO::FETCH_ASSOC);
        while($row = $result->fetch()){
            if($row["amount"]<=0){
				$item_situation.=$row["item"]." ";
			}
        }
	}	

    if($item_situation===''){
		for($i=0; $i<count($item); $i++){
            $statement="UPDATE products SET amount=amount-1 where id=$item[$i]";
		    $conn->query($statement);			
		}
		$arr = array ("result" => "success");		
	}
	else{
		$arr = array ("result" => "fail", "shortage" => $item_situation);		
    }
   
	exit(json_encode($arr));	
	
	$conn->commit();
    }
catch(PDOException $e)
    {
    $conn->rollback();
    echo "Error: " . $e->getMessage();
    }

$conn = null;
?>