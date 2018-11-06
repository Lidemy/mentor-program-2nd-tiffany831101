## 答案：
會輸出
1
3
5
2
4

## 解釋：
1. 會把console.log(1)放進stack裡面，執行完清空
2. 把第一個settimeout放進stack，這時會把這個匿名function放進webapis等待(等待timer()0秒之後會放進queue裡面)
3. 但因為這時候的stack沒有清空，所以event loop(會去偵測stack跟queue的狀態)要等到stack執行完畢才能把匿名的function丟進stack裡面
4. 會把console.log(3)放進stack裡面，執行完清空
5. 把第二個setimeout放進stack,匿名函式一樣被丟到webapis去等到(0秒之後放進queue裡面)
6. 這時候剛剛的stack已經清空，所以會執行第一個匿名函式，console.log(2)，執行完清空
7. 最後執行第二個匿名函式console.log(4)，執行完清空

