## 為什麼我們需要 React？可以不用嗎？
理論上也是可以乖乖寫好html、js、css，react是專注在view，但是在寫五子棋時我就有感覺到，如果是用js寫，在處理判斷輸贏那邊(檢視是否有被白棋或黑旗下過)可能就會寫出相對很長很長的程式碼。而透過react的方式，雖然一開始需要理解一些概念，不過寫起來覺得方便許多。


## React 的思考模式跟以前的思考模式有什麼不一樣？
如果與jquery或者是原本html、css、js這樣寫的話，假使要改變某個dom元素裡面的值，我們可能需要先queryselector選出後，改變值，再放回去給那個dom元素，但是如果以react的話，會使用jsx語法以及js，把需要的資料放在state狀態之中，因此資料做改變時，我們可以直接的render，(換句話說，透過組件傳遞的方式，不會直接的修改dom元素，而是透過修改資料的方式)


## state 跟 props 的差別在哪裡？
props:將上層組件的內容傳遞給下層組件，為父元件傳來的資料內容，可以微陣列、字串或函式
state:元件內部狀態，可以被改變，如果要改變的話需要用到setState()的方式。
可以將子組件的props的質設定為state，這樣一來當父組件的state有改變的時候，就會一起改變原本不能改動的props的值


## 請列出 React 的 lifecycle 以及其代表的意義
大致上可以分成三種：
mounting:
1. render:一定要寫，當有props或者state被改變時就會執行
2. constructor(props):當component還沒有顯示在畫面上時，就會先執行。裡面會放state，綁定this等等
3. componentWillMount:會發生在第一次render之前，所以在這邊改變state的話，不會觸發re-render
4. componentDidMount:在component render到畫面上之後做的事情，可以做一些事件的綁定、ajax後端的api
updating:
1. componentWillReceiveProps(nextProps):已經渲染的component，如果有收到新的props時會執行這個方法
2. shouldComponentUpdate(nextProps, nextState):react預設每次狀態改變時會重新render，
3. componentWillUpdate(nextProps, nextState):在收到新的 props 或 state，component將要重新渲染之前，會執行這個方法
4. componentDidUpdate(prevProps, prevState):在state跟props被update後執行。

unmounting:
1. componentWillUnmount:當component要從dom被移除前會執行，如果component有用到綁定事件、或setinterval等等，在componentDidMount裡面做的設定，若需要被終止、移除，會在這個方法中執行。


