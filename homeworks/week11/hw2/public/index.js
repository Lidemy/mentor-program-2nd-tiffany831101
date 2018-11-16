const container = document.querySelector(".container-fluid");
// console.log(container);
const urlInput = document.getElementById("urlInput");
// console.log(urlInput);
const newLinl = document.getElementById("link");
container.addEventListener("click", (e) => {
    if (e.target.className == "btn btn-outline-secondary") {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/url", true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send('url=' + urlInput.value);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 400) {
                console.log(xhr.responseText);
                link.innerHTML = xhr.responseText;
                link.href = xhr.responseText;
            }
        }
        urlInput.value = "";
    }
})