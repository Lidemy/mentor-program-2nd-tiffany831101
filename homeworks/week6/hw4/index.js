var container = document.querySelector(".container");
var commentBtn = document.querySelectorAll(".box-collapse");
container.addEventListener("click", function (e) {
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
        if (checkifnull(content)) {
            var req = new XMLHttpRequest();
            req.onload = function () {
                if (req.status >= 200 && req.status < 400) {
                    if (req.responseText === 'modified') {
                        window.location.reload();
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
                    window.location.reload();
                }
            }
        }
    }




    //檢查是否有填寫
    function checkifnull(field) {
        if (field.value === "") {
            return false;
        } else {
            return true;
        }
    }




})

var page = document.querySelector(".pagenums").parentElement;
console.log(page);