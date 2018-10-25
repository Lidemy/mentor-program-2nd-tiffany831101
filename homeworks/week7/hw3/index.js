var container = document.querySelectorAll(".container");
var commentBtn = document.querySelectorAll(".box-collapse");

const responseChild = (ele) => {
    console.log(ele.innerText);
    console.log(ele.nextElementSibling);
    if (ele.innerText == "回應▶") {
        ele.nextElementSibling.style.display = "block";
        ele.innerText = "回應▼";
    } else if (ele.innerText == "回應▼") {
        ele.nextElementSibling.style.display = "none";
        ele.innerText = "回應▶";
    }

}

container[0].addEventListener("click", (e) => {
    console.log(e);
    if (e.target.innerText === "回應▶") {
        for (var i = 0; i < commentBtn.length; i++) {
            if (e.target == commentBtn[i]) {
                commentBtn[i].nextElementSibling.style.display = "block";
                commentBtn[i].innerText = "回應▼";
            }
        }
    } else if (e.target.innerText === "回應▼") {
        for (var i = 0; i < commentBtn.length; i++) {
            if (e.target == commentBtn[i]) {
                commentBtn[i].nextElementSibling.style.display = "none";
                commentBtn[i].innerText = "回應▶";
            }
        }
    }

    if (e.target.className == "fas fa-check") {
        var content = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
        console.log(content.value);
        var cmmt_id = content.nextElementSibling;
        console.log(cmmt_id);
        if (content.value !== "") {
            var req = new XMLHttpRequest();
            req.onload = function () {
                if (req.status >= 200 && req.status < 400) {
                    if (req.responseText === 'modified') {
                        // window.location.reload();
                        content.outerHTML = `<div class="content">${content.value}</div>`
                        e.target.parentElement.innerHTML = `<i class="fas fa-pen"></i>`
                    }
                }
            }

            req.open('POST', 'modify.php', true);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.send('cmmt_id=' + cmmt_id.innerText + '&content=' + encodeURIComponent(content.value));
        }

    }

    if (e.target.className == "fas fa-pen") {
        var contentBox = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling;
        console.log(e);
        var editarea = document.createElement("textarea");
        editarea.className = 'areaEdit';
        editarea.innerText = contentBox.innerText;
        contentBox.outerHTML = editarea.outerHTML;
        e.target.parentElement.innerHTML = `<i class="fas fa-check"></i>`;
    }

    if (e.target.className == "fas fa-trash-alt") {
        //要送cmmt_id到delete.php
        var cmmt_id = e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling;
        console.log(cmmt_id);
        console.log(cmmt_id.innerHTML);
        var req = new XMLHttpRequest();
        req.open("POST", "./delete.php", true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("cmmt_id=" + cmmt_id.innerText);
        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                if (req.responseText == "deleted") {
                    e.target.parentElement.parentElement.parentElement.outerHTML = "";
                }
            }
        }
    }




    //檢查是否有填寫
    const checkifnull = (field) => {
        if (field.value === "") {
            return false;
        } else {
            return true;
        }
    }


    if (e.target.className == "parentBtn") {

        e.preventDefault();
        var parentContent = e.target.previousElementSibling.previousElementSibling;
        checkifnull(parentContent);
        var xml = new XMLHttpRequest();
        xml.open("POST", "./insert_comm.php", true);
        //沒有設置這行的話會抓不到post的資料
        xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xml.send('parent_id=0' + '&content=' + parentContent.value);
        xml.onreadystatechange = () => {
            if (xml.readyState == 4 && xml.status == 200) {
                var mainMessage = document.querySelectorAll(".mainMessage");
                var response = JSON.parse(xml.response);
                console.log(response);
                var parent_nickname = response['nickname'];
                var parent_time = response['time'];
                var cmmt_id = response['cmmt_id'];
                var parentMessage = document.createElement("DIV");
                parentMessage.classList.add("mainMessage");

                parentMessage.innerHTML = `
                <div class = "nickname">${parent_nickname}</div>
                    <div class = "time">${parent_time}</div>
                    <div class = "edit_delete">
                        <span class="cmmt__edit"><i class="fas fa-pen"></i></span>
                        <span class="cmmt__delete"><i class="fas fa-trash-alt"></i></span>
                    </div> 
                    <hr>
                    <div class = "content">${parentContent.value}</div> 
                    <div class = "cmmt__id">${cmmt_id}</div>
                </div>




                <div class = "sub-cmmt">
                    <div class = "box-collapse" onclick="responseChild(this)">回應▶</div>
                    <form action = "./insert_comm.php" method = "post"
                style = "display: none">
                    <span>${parent_nickname}</span> 
                    <span><a href = "logout.php" class = "logoutBtn"> 登出 </a></span>
                    <textarea class = "content" name = "content" placeholder = "留言內容" cols = "40"
                    ows = "5" required></textarea> 
                    <input type = "hidden" name = "parent_id" value = ${cmmt_id}>
                    <input type = "submit" value = "送 出" class="childBtn"/>
                    </form>
                `;
                console.log(mainMessage[0]);
                container[0].insertBefore(parentMessage, mainMessage[0]);
                parentContent.value = "";
            }
        }


        // if (e.target.className == "childBtn") {
        //     e.preventDefault();
        //     console.log(typeof (e.target.parentElement.childNodes[0]));
        //     var mainBox = e.target.parentElement.parentElement.parentElement;
        //     var firstSubBox = mainBox.childNodes[13];
        //     var parent_nickname = mainBox.childNodes[1];
        //     var childMessage = document.createElement("DIV");
        //     childMessage.classList.add("sub_cmmt");

        //     console.log(parent_nickname.innerText);
        //     var childContent = e.target.previousElementSibling.previousElementSibling;
        //     checkifnull(childContent);
        //     var xml = new XMLHttpRequest();
        //     xml.open("POST", "./insert_comm.php", true);
        //     //沒有設置這行的話會抓不到post的資料
        //     xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //     xml.send('parent_id=' + e.target.previousElementSibling.value + '&content=' + childContent.value);
        //     xml.onreadystatechange = () => {
        //         if (xml.readyState == 4 && xml.status == 200) {
        //             var response = JSON.parse(xml.response);
        //             console.log(response);
        //             var child_nickname = response['nickname'];
        //             var child_time = response['time'];
        //             var cmmt_id = response['cmmt_id'];

        //             console.log(child_nickname);
        //             console.log(parent_nickname);

        //             if (child_nickname.innerText == parent_nickname) {
        //                 childMessage.classList.add("addColor");

        //             }

        //             childMessage.innerHTML = `
        //         <div class="nickname">${child_nickname}</div>
        //         <div class="time">${child_time}</div>
        //         <div class="edit_delete">
        //             <span class="cmmt__edit"><i class="fas fa-pen"></i></span><span class="cmmt__delete"><i class="fas fa-trash-alt"></i></span>
        //         </div>
        //         <hr>
        //         <div class="content">${childContent.value}</div>
        //         <div class="cmmt__id">${cmmt_id}</div>`;
        //             console.log(childMessage);
        //             mainBox.insertBefore(childMessage, firstSubBox);
        //         }
        //     }

        // }

    }

    if (e.target.className == "childBtn") {
        e.preventDefault();
        console.log(typeof (e.target.parentElement.childNodes[0]));
        var mainBox = e.target.parentElement.parentElement.parentElement;
        var firstSubBox = mainBox.childNodes[13];
        var parent_nickname = mainBox.childNodes[1];


        console.log(parent_nickname.innerText);
        var childContent = e.target.previousElementSibling.previousElementSibling;
        checkifnull(childContent);
        var xml = new XMLHttpRequest();
        xml.open("POST", "./insert_comm.php", true);
        //沒有設置這行的話會抓不到post的資料
        xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xml.send('parent_id=' + e.target.previousElementSibling.value + '&content=' + childContent.value);
        xml.onreadystatechange = () => {
            if (xml.readyState == 4 && xml.status == 200) {
                var response = JSON.parse(xml.response);
                console.log(response);
                var child_nickname = response['nickname'];
                var child_time = response['time'];
                var cmmt_id = response['cmmt_id'];
                var childMessage = document.createElement("DIV");
                childMessage.classList.add("sub_cmmt");
                childMessage.style.padding = "5px";
                childMessage.style.backgroundColor = "#f2f5f7";
                if (child_nickname == parent_nickname.innerText) {
                    childMessage.classList.add("addColor");
                    childMessage.style.backgroundColor = "##d1effd";
                    childMessage.style.padding = "5px";
                    childMessage.style.marginTop = "10px";
                }

                childMessage.innerHTML = `
                <div class="nickname">${child_nickname}</div>
                <div class="time">${child_time}</div>
                <div class="edit_delete">
                    <span class="cmmt__edit"><i class="fas fa-pen"></i></span><span class="cmmt__delete"><i class="fas fa-trash-alt"></i></span>
                </div>
                <hr>
                <div class="content">${childContent.value}</div>
                <div class="cmmt__id">${cmmt_id}</div>`;
                console.log(childMessage);
                mainBox.insertBefore(childMessage, firstSubBox);
                childContent.value = "";
            }
        }

    }



})

var page = document.querySelector(".pagenums").parentElement;
console.log(page);




`






`