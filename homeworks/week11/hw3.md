## 什麼是 MVC？
M：model 存取資料庫相關的資料處理，我的理解是可以透過model去處理與資料庫交互的部分
V：view 是放顯示介面的template，以作業為例應該算是ejs，不處理跟資料庫交互的部分，只處理顯示畫面
C：controller 處理view 跟model之間的橋樑，我的理解應該是把model抓回來的資料透過程式需要的處理，傳回去給view
但因為我在這周作業的時候好像都把model跟view寫在app.js裡面，抓回來跟處理都在這邊，所以好像沒有特別感受到model跟contriler的差別，不知道我這樣理解對嗎？




## 什麼是 ORM？
object-relational-mapping，我的理解是原本跟要操作資料庫都需要用sql語法來進行crud，但是現在透過orm可以用物件的方式來處理，也不必去管是哪個資料庫(sql server,oracle,mysql等等)，可以防止sql injection、方便移轉資料庫等等的優點



