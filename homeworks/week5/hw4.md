## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
varchar可以存的字數是255以下，而text最長可以存2^31-1，所以如果字數限制比較少的話，可以用varchar



## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？
cookie我得到一種很有趣的說法，有點像是你(client端)去買東西後店家(server端)給你的發票，所以是由伺服器端給你的一個類似驗證的東西，如果你下一次再次登入的話，會可以藉由這個憑證來記得你是誰，所以所謂的cookie就是這種用法~可以在server端setcookie來達成裡面的有效時間、名稱等等的設定



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
在不小心看到第六周作業的時候想到一個問題，如果有人去改cookie的user_id或username存的是名字或一般數字的話，那只要竄改
cookie的設定，就可以換成別人的帳號登入了><"實在太可怕了，有看到書中提到可以用sesion的方式存成哈希瑪，無法反推回來的識別證，以防別人去登入你的cookie。

