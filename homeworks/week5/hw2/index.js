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
})

var page = document.querySelector(".pagenums").parentElement;
console.log(page);