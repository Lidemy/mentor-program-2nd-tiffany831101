## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
搜尋到一個之前沒有看過的標籤：<embed>可以播放音樂，跟圖片一樣設置src:音樂檔來源，也可設置重複播放、對齊(align)方式等等
<select>可以製作選單，<option>則是選單的選項，size決定一次要顯示幾個、multiple則是是否可以多選
<textarea>則是一個文字輸入框，可以設置行、列數

## 請問什麼是盒模型（box modal）
可以用包裹的方式來理解
包含content padding border margin，設置元素的寬高為content的寬高，內容(包裹的物品)侷限在這裡，padding則是往外延伸的(可以想成是泡棉或填充物)，border則是邊界，可以設置樣式、寬度、顏色等等、margin則定義了與其他元素之間的保留距離

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
元素之間的類型都可以做轉變
inline:行內元素，不會換行，例如<span>會緊接者你上一個標籤，無法設置width、height，但是如果不想用inline-block改成用浮動的方式(會默認成display:block;float:left(看你要從哪編排))
block:塊狀元素(當作盒子來裝東西的。可以想成是容器)，會獨佔一行，例如：<p> <div> <ul> <h1>。
inline-block:行內塊元素，具備兩者的特性，<img>不換行，但是可以設置width、height

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static:為預設的位置，會在瀏覽器的左上方
relative:為相對於自己原本的位置，例如設position:absolute  left:100px top:100px;則會往原本的右邊下面移動，所以原本的就會在新位置的左邊100px;上面100px;
absolute:會與父元素的位置有關係(但是父元素要設置為非static，否則會變成與更上的body的距離，變成會脫離原本的父元素)
fixed:像是切hw2的時候的拍手，不會隨著瀏覽器的移動而改變位置，討人厭的廣告常會使用這個方式逼你看XD




