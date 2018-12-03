## React Router 背後的原理你猜是怎麼實作的？
可以先區分成hashRouter跟browserRouter來看
1. hash router(hashRouter) 
``` 
window.location.href("#about") 
window.onhashchange = ()=>{ console.log(....) //可以想成是在react裡面就會render某個ui(所以從頭到尾都沒有跳轉頁面) 
}  

``` 
2. h5 router(browserRouter) * 除了用hash還可以用路徑的方式 
``` 
history.pushState()：可以跳轉到新的路徑，並且添加一個新的歷史紀錄(剛剛你造訪的網站會變成在歷史紀錄裡) 
history.replaceState()：大部分都跟push很像，唯一不同的是：不會產生歷史紀錄(直接改變目前的) 

```
所以我認為當path傳進去時，也就設定了window.location.href，再透過判斷這個url來渲染後面的component

SDK:Software Development Kit：像一個工具箱，裡面包含如何使用，需要的工具
API:application programming interface：溝通兩個app之間，例如寫字時需要用到筆來寫到紙上，當然我們可以造一個跟筆有相同功能的東西，但是我們同時也可以使用寫好的api，例如使用google map的api

我看到網上有一種解釋方式是用正方形(api)跟長方形(sdk)做解釋，廣義的長方形包含正方形，也就是sdk通常也會包含api。

我的想像是例如之前想調用paypal的api，sdk裡面會有教學告訴我該如何去設定我的server端，要根據他的寫法去寫，那api則是最後與這個paypal接起來的接口。
另外也想到像是vscode裡面有很多的套件，這些套件在開發時我的想像應該是按照vscode的規範去寫(建立在這之上的sdk，而在開發時也可能需要調用到api，例如highlighting的功能，可能會去調用js相關的規範的api)，而我們單純使用者在使用這個套件時，則是調用他寫好的套件的api


## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？
在同源的時侯，ajax會帶上cookie
但是在不同源的時候，要在發送ajax時加上：withCredentials為true，在server端則是要設置：Access-Control-Allow-Origin跟Access-Control-Allow-Credentials為true
