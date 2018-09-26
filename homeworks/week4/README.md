# 作業

## hw1：計算機

![](calculator.png)

可參考範例：[https://lidemy.github.io/mentor-program-kristxeng/homeworks/week4/hw1/](https://lidemy.github.io/mentor-program-kristxeng/homeworks/week4/hw1/)（第一期學生 Kris 的作品）

請用你在之前學會的網頁技術（HTML, CSS, JavaScript）打造出一個簡單的計算機，功能如下：

1. 要有 0 到 9
2. 要有加減乘除
3. 要能夠清空

計算機這一題其實要難可以到很難，這個作業的目的只是想讓你熟悉基本操作而已，所以你可以用以下的範例來測試，能夠通過就好：

### 測試1

1. 按下 123
2. 按下 +
2. 按下 456
4. 出現 579

### 測試2

1. 按下 20
2. 按下 25
3. 按下 -
4. 出現 -5

## hw2：仿 Google 表單

請實作出你們當初報名時所填寫的表單：https://docs.google.com/forms/d/e/1FAIpQLSeOTy7j1OjgI-q9xYaiGCJJn5w2TkpB1JNZZXXQwqCt3SsDsg/viewform

![](form.png)

可參考範例：[https://lidemy.github.io/mentor-program-pychiang/homeworks/week4/hw2/](https://lidemy.github.io/mentor-program-pychiang/homeworks/week4/hw2/)（第一期學生 pychiang 的作品）

背景隨便用一個顏色就好了，重點是實做出表單內容以及驗證。UI 可以不用完全一樣，只要功能有做出來就好，UI 只是讓你參考的。

功能如下：

1. 文字輸入框可以選擇必填或是非必填
2. 送出表單時，必填的地方如果空白，要能夠把背景變紅色並且提示使用者
3. 成功提交之後，把表單的資料輸出在 console，並且用`alert`跳出提示即可

## hw3：仿 Twitch 頻道頁面

請串接 [Twitch API](https://dev.twitch.tv/docs)，顯示出 League of Legends 目前正在直播的前 20 個實況。（Twitch 更新的 API，作業用的是 [Twitch API v5](https://dev.twitch.tv/docs/v5)）

![](twitch.png)

1. [Twitch API](https://dev.twitch.tv/docs)裡面有一個 API 是可以拿到現在正在直播的某個遊戲底下的資料，API 的描述是「Gets a list of live streams.」，看到這行就代表你找對 API 了。
2. API 要帶的參數有一個 `game` 的欄位，請帶`League%20of%20Legends`
3. 請顯示 20 個實況，不多不少，要剛好 20 個

（基本上這題就是直接照搬我之前在別的地方出過的[作業](https://github.com/aszx87410/frontend-intermediate-course/blob/master/homeworks/hw4.md)）

## hw4：化繁為簡

每次在操縱 DOM 物件時，都需要輸入`document.querySelector()`，重複幾次之後會覺得有點煩瑣，所以我們可以實作出一個簡單的 function 叫做`q`，可以快速的選取到你要的元素，接著利用選到之後的這個物件進行常見的操作（`hide`跟`show`）

可以參考以下範例，只要能夠按照以下範例運行即可：

``` js
var element = q('.title')
element.hide() // 隱藏
element.show() // 顯示 

```
## hw5：簡答題

1. 什麼是 DOM？
document object model，可以看成是javascript跟html的元素的接口，讓js可以去操作html裡面的元素，<html>標籤裡面包含了head跟body，body之中則由很多父子元素構成，每一個元素可以視為一個節點。

2. 什麼是 Ajax？
Asynchronous JavaScript and XML，可以透過javascript的方式藉由api拿到資料，並且透過不跳轉頁面的方式，首先先創建一個XMLHttpRequest的請求訊息，再將需要的接口api訊息寫在open之中，再將send出去連接到端口，以獲取資料。

3. HTTP method 有哪幾個？有什麼不一樣？
發現網上有一個很有趣的說法解釋不同的method
get:就像是在餐廳點餐時，要求服務生把餐廳的菜單拿過來，以獲取資料為目的
post:就像是要跟餐廳的服務生點餐，例如把註冊資料送出去之後，去跟資料庫的資料核對註冊成功與否，就像服務生跟你說今天是不是還有這道菜
delete:刪除你剛剛點的東西，把資料刪除
put:想要重新點餐一次，所以如果新增一筆資料，會把剛剛的資料覆蓋上去
patch:附加新的資料在已經存在的資料後面，就像你點完主餐還想繼續加點飲料甜點
head:只會取得HTTP header的資料
4. `GET` 跟 `POST` 有哪些區別，可以試著舉幾個例子嗎？
有查到一個很有趣的比喻，get就像是寫明信片一樣，把住址、收件人等等的(header)跟信件內容都寫在明信片上，get的方式也沒有body，只有header
所以在網址上面可以看到很多的問號，後面會接你要找的內容，所以如果是具有安全性的問題，就不建議用get的方式(例如密碼)
用post的方式就像是有信封包起來的信件，header就是信封的部分，body就是信件內文，你無法單從網址就看到送出的資料為何，

5. 什麼是 RESTful API？
Representational(JSON,XML...) State Transfer(狀態轉化：GET POST...methods)，是一種網路架構風格，善用http的這些動詞，來相對應資料庫的增刪改查crud，以便可以更簡潔直觀的去看uri，達到對資源的操作
6. JSON 是什麼？
全名是Javascript Object Notation，是一種輕量級的資料交換的格式，其中name跟value會成對存在，並且用逗號隔開，物件的話會用{}，陣列的話則會用[]。
7. JSONP 是什麼？
JSON with padding，用一個回乎函式的方式來取得JSON的資料
8. 要如何存取跨網域的 API？
可以用script標籤包起來的方式，scr跨域的網址，後面接一個callback function，那個function就可以獲取到這個跨域的資料
