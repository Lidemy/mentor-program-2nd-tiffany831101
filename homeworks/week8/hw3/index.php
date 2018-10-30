<!--
php抓出可以購買的品項
點擊送出，計算勾選的項目，ajax傳送到後端
檢查所有的品項都可以購買，db扣除
response傳送結果，以alert顯示
-->


    


<html>
	<head>
		<meta charset="utf=8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css">
        <title>Document</title>

		<style>
        img{
            width:150px;
            height:150px;
        }
		</style>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	</head>
	
	<body>
    <div class="container-fluid px-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

             <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
<!-- 福資歷格審查 -->
    <div class="form-group">
    <div class="col-3">
        <label class="col-form-label" for="inputDefault">輸入姓名</label>
        <input type="text" class="form-control">
    </div>
    <div class="col-3">   
        <label for="exampleSelect1">福利資格</label>
        <select class="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
    <div class="col-3">
       <label for="exampleSelect1">居住縣市</label>
        <select class="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    </div>
</div>



    <!-- <p>購買品項</p><br> -->
    <div class="row mx-0 mt-5">
    <div class="col-12">
		<form class="d-flex justify-content-around flex-nowrap">
        
        
		
<?php	
	require_once("conn.php");		
    $statement="SELECT item,id,src FROM products";
    $result = $conn->query($statement);
	$result ->setFetchMode(PDO::FETCH_ASSOC);			
	while ($row = $result->fetch()){				
            echo "
            <div class='form-check'>
                <label class='form-check-label'>
                    <input type='checkbox' class='form-check-input' value=".$row["id"].">".$row["item"]."</br>
                    <img src='".$row["src"]."'/>
                </label>
            </div>            
            ";
	}
	
	
	$conn=null;
?>
                </div>
            </div>
            <div class="mt-3 col-6 mx-auto d-flex justify-content-center">
		    <button type="submit" class="btn btn-primary mx-auto">Submit</button>
            </div>
	    </form> 
</div>

		<script>
			$(document).ready(function(){
				
				$(document).on("submit",function(e){
					e.preventDefault();
					
					var total_item=[];		
					$("input").each(function(){
						if ($(this).is(":checked")){
							console.log($(this).val());
							total_item.push($(this).val());
						}
					})
					$.ajax({
						type: "POST",
						url: "transaction.php",
						data: {item:total_item},
						success:function(resp){
                            var resp=JSON.parse(resp);
                            console.log(resp);							
							if(resp.result==="success"){
								alert("購買成功");								
							}
							if(resp.result==="fail"){
								alert(resp.shortage +"缺貨無法購買");
							}
						}
					});
					
				})
			})
			
		</script>
	</body>
</html>