<?php
//這一份主要放留言板，會寫html相關的
//1. 先切父留言版的input，裡面需要安插一個input欄位是hidden，這樣parent_id就會是0
//2. 所有父留言只要在$sql="select content time name from test where parent_id=0 des 按照時間遞減排序(因為最後流的顯示在最上面，跟time函數有關係)"
//3. 邏輯如下：
//   先選出所有parentid=0的函示，
//   之後將這些依照時間做排序，
//   parent id=0的也會有自己的流水號id，這個是系統幫忙排的
//   再跑出最新的parent-id的同時，把內部的子留言依照時間做排序
//   這樣就算跑完一整個父留言框(裡面同時也包含子留言框+輸入框)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <!-- 父(主要)留言框 -->
    <div class="container">
    <?php
    //有測試過這邊是有聯上的，代表引入成功，可以最後再把順利成功拿掉
    require("./conn.php");
    //如果沒有設置cookie的話
    if( !isset($_COOKIE['user_id']) ){
    ?>
    <input class="remindLogin" type="button" value="登入" onclick="location.href='login.php'" />
    <?php
    }else{
        //因為在前面有設置cookie的user_id是users資料表的id(在login跟reg都有設置)
        //進行預處理
        $nickname_stmt = $conn->prepare("SELECT nickname FROM $users_table WHERE id = :user_id");
        //將其綁定參數與值，因為上面用冒號，所以這邊也要用冒號隔開
        $nickname_stmt->bindParam(':user_id', $_COOKIE['user_id']);
        //執行這件事情
        $nickname_stmt->execute();
        //設定取回的方式為字串陣列，又叫關聯式陣列
        $nickname_stmt->setFetchMode(PDO::FETCH_ASSOC);
		$nickname_row = $nickname_stmt->fetch();
        
    ?>   
        <div class="mainInput">
        <!-- 代表這邊我要的方式是post到insertcomm的檔案裏面，有測試過 -->
            <form action="./insert_comm.php" method="post">
                <div class="nickname">
					<?php echo $nickname_row['nickname'] ?>
					<span><a href="logout.php">登出</a></span>
				</div>
                <textarea class="content" name="content" placeholder="留言內容" cols="50" rows="10" required></textarea>
                <input type="hidden" name="parent_id" value="0"/>
                <input type="submit" value="送 出" />
            </form>
        </div>
        <?php
    };//如果有符合這個else才會執行顯示父留言框，代表在一天之內登入過，如果超過一天的話(或使用不同的瀏覽器)，就會要再登入一次(因為有設置cookie)
        ?>
        <!-- 父留言呈現，用資料庫取出的方式 -->
        <?php
        //選出資料庫parent_id為0的做顯示
        $pagesql = "SELECT COUNT(parent_id) AS datanum FROM comments WHERE parent_id = 0";
        $pages_result = $conn->query($pagesql);
        $pages_result->setFetchMode(PDO::FETCH_ASSOC);;
        $page_row = $pages_result->fetch();
        $perpage = 10; //每頁顯示項目數量
        $pages = ceil($page_row['datanum']/$perpage); //無條件進位，因為如果有45筆，就會需要五頁
            if (!isset($_GET["page"])){ //假如$_GET["page"]未設置
                $page=1; //則在此設定起始頁數
            } else {
                $page = intval($_GET["page"]); //確認頁數只能夠是數值資料
            }
            $start = ($page-1)*$perpage;
                $parent_sql = "SELECT c.id AS cmmt_id, user_id, nickname, time, content FROM $cmmts_table AS c INNER JOIN" . 
						" $users_table ON parent_id = 0 AND user_id = $users_table.id ORDER BY time DESC " . 
						"LIMIT " . ($page-1)*10 . ", 10";
                $parent_result = $conn->query($parent_sql);
                $parent_result->setFetchMode(PDO::FETCH_ASSOC);
                
                    //下一筆沒有資料時會變null跳出while迴圈
                    while($parent_row = $parent_result->fetch()) {
                ?>              
                <div class="mainMessage">
                    <div class="nickname"><?php echo $parent_row["nickname"]?></div>
                    
                    <div class="time"><?php echo $parent_row["time"]?></div>
                    <div class="edit_delete">
                    <?php
                    if(isset($_COOKIE['user_id']) AND $parent_row['user_id'] === $_COOKIE['user_id']){
                        echo '<span class="cmmt__edit"><i class="fas fa-pen"></i></span><span class="cmmt__delete"><i class="fas fa-trash-alt"></i></span>';
								}
                    ?>
                    </div>
                    <hr>

                    
                    <div class="content"><?php echo $parent_row["content"]?></div>
                    <div class="cmmt__id"><?php echo $parent_row["cmmt_id"] ?></div>
                            <?php
                            $child_sql="SELECT c.id AS cmmt_id, user_id, nickname, time, content FROM $cmmts_table AS c INNER JOIN $users_table".
									" WHERE parent_id = " . $parent_row['cmmt_id'] . " AND user_id = $users_table.id".
									" ORDER BY time DESC";
                            $child_result = $conn->query($child_sql);
                            $child_result->setFetchMode(PDO::FETCH_ASSOC);
                                while($child_row = $child_result->fetch()) {
                                    if($child_row['user_id'] === $parent_row['user_id']) echo '<div class="addColor sub-cmmt">';
							        else echo '<div class="sub-cmmt">';
                            ?>
                                <!-- <div class="sub-cmmt"> -->
                                    <div class="nickname"><?php echo $child_row["nickname"]?></div>
                                    <div class="time"><?php echo $child_row["time"]?></div>
                                    <div class="edit_delete">
                                    <?php
                                    if(isset($_COOKIE['user_id']) AND $child_row['user_id'] === $_COOKIE['user_id']){
                                            echo '<span class="cmmt__edit"><i class="fas fa-pen"></i></span><span class="cmmt__delete"><i class="fas fa-trash-alt"></i></span>';
								    }
					                ?>
                                    </div>
                                    
                                    <hr>
                                    <div class="content"><?php echo $child_row["content"]?></div>
                                    <div class="cmmt__id"><?php echo $child_row["cmmt_id"] ?></div>
                                </div>

                            <?php
                                };//while迴圈結束
                            ?>
            <!-- 點擊可以跑出下面的輸入框-->
                    <div class="sub-cmmt">
                        <?php
                        //如果沒有設置cookie的話就顯示要他登入導回login.php
                        if( !isset($_COOKIE['user_id']) ){
                        ?>
                        <a class="warn_login" onclick="location.href='login.php'">
							登入以發表回應 
                        </a>
                        <?php
                        }else{
                        ?>
                        <div class="box-collapse">回應▶</div>
                        <!-- 把留言送去insertcomm裡面 -->
                        <form action="./insert_comm.php" method="post" style="display: none">
                            <?php echo $nickname_row['nickname'] ?>
					        <span><a href="logout.php" class="logoutBtn">登出</a></span>
                            <textarea class="content" name="content" placeholder="留言內容" cols="40" rows="5" required></textarea>
                            <input type="hidden" name="parent_id" value=<?php echo $parent_row['cmmt_id']?> />
                            <input type="submit" value="送 出" />
                        </form>

                        <?php
						}//else結束
					?>
                    </div>
                </div>

        <?php
                       
                    };//父留言的while迴圈結束     
        ?>
    </div>
    <div class="pagenums">
    <?php
    echo "<br /><a href=?page=1>首頁</a> ";
    echo "第 ";
    for( $i=1 ; $i<=$pages ; $i++ ) {
        //會顯示前三頁跟後三頁
        if ( $page-3 < $i && $i < $page+3 ) {
            echo "<a href=?page=".$i.">".$i."</a> ";
        }
    } 
    echo " 頁 <a href=?page=".$pages.">末頁</a><br /><br />";
    
    ?>    
    </div>
    


  
    <script src="./index.js"></script>
</body>
</html>