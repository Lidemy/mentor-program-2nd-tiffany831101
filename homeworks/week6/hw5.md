## 請說明 SQL Injection 的攻擊原理以及防範方法
攻擊者透過用特殊的資料庫語法取得資料，或進行惡意的攻擊，例如在帳號的部分輸入' or 1=1/
因為1=1的恆等式，or true永遠都是true，加上後面註解掉password的部分，所以就會取得整個資料表，在不需要驗證的情況之下
要避免的方式，可以使用prepare欲處理的方式，來避免這樣的問題，在sql語法的部分用?或者是冒號再加上後面要綁定的名稱，再用bindParam的方式，綁定值，可以檢查到裡面是否有不符合的字元，避免掉sql injection。

## 請說明 XSS 的攻擊原理以及防範方法
XSS攻擊會找到網站漏洞，輸入惡意的程式碼，像是把原本網站導到惡意網站，可以用encode的方式來避免這個問題，如果是url用get船參數，則用urlencode，如果是html則像是留言板一樣用htmlspecialchars，來逃脫特殊字元，javascript的話則可以用jsonencode


## 請說明 CSRF 的攻擊原理以及防範方法
Cross-site request forgery，網站可以驗證是否是用戶發送的，但是有可能是用戶在不知情的情況下發送的，例如不小心按到一張惡意的圖片，可以透過檢查referer欄位，這個是不是來自跨域的請求，但是光是這樣還是不足的，在表單中加一組token，通常是亂數，這樣如果正常程序來的請求會有這組為亂數，但是來自惡意的方式則沒有。

## 請舉出三種不同的雜湊函數
1. md5
2. SHA-256
3. SHA-1

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別
cookie是由server端發送給client端的，存在於client端，在上週作業有發現到如果存的是user_id的話，其他有心人只要稍微改一下，就可以看到別人的資料，或者是有些網站會有設定廣告關閉的cookie，如果把這個cookie的設定時間調成很久之後的時間，，那下次用同一瀏覽器進來時也不會出現，session的話則是存在server端，在client端只會顯示phpsessid，裡面可以存很多的資訊。


## `include`、`require`、`include_once`、`require_once` 的差別
require通常會將目標檔案的內容讀入，並且在編譯的過程中加進去，include則是在讀到的時候才將他加進來
，include通常會使用在條件句、for loop等的控制流程，有沒有once的差別在於，once會檢查是否已經引入過這個檔案，如果你的檔案內有你自行定義好的函數名稱，再倒入第二次導入的時候便會出現問題， 因為php中同名函數不可以宣告第二次。
