const container = document.querySelector(".container");
const ul = document.querySelector(".list-group");
const todoInput = document.querySelector('.form-control');
var editTimes = 0;
var list = [];
container.addEventListener('click', (e) => {
    if (e.target.className === 'btn btn-info') {
        if (todoInput.value == "") return;
        console.log(list);
        addTodo(todoInput.value);
        render();
        todoInput.value = "";

    }

    if (e.target.className === "fas fa-pencil-alt" && editTimes === 0) {
        editTimes++;
        var todoThing = e.target.parentElement.nextElementSibling.innerHTML;
        e.target.parentElement.nextElementSibling.outerHTML = `
        <div class = "d-inline-flex flex-wrap">
            <div class = "form-group d-inline-block mb-0">
                <input class = "form-control form-control-sm d-inline-block" type = "text" placeholder = ".form-control-sm"
                id = "inputSmall"  value =${todoThing}>
            </div>
            <button type = "button"
            class = "btn btn-outline-info ml-3">Add</button>
        </div>`;
    };
    if (e.target.className === "btn btn-outline-info ml-3") {
        editTimes = 0;
        e.target.parentElement.outerHTML = `<p class = "d-inline-block mb-0">${e.target.previousElementSibling.children[0].value}</p>`
    }

    if (e.target.className == "fas fa-trash-alt m-1") {
        removeTodo(e.target.parentElement.dataset.key);
    }
    if (e.target.className == "fas fa-skull-crossbones") {
        e.target.parentElement.classList.remove("red");
        e.target.parentElement.classList.add("green");
        e.target.parentElement.innerHTML = `<i class="fas fa-check"></i>`

    }
})

//這個keydata代表的是在陣列之中的位置 
var removeTodo = (keyData) => {
    // 刪除那個data-key的值
    list.splice(keyData, 1);
    // 重新render一次
    render();
}


var addTodo = (todo) => {
    // 把內容放進陣列之中
    list.push(todo);
    // 重新渲染一次
    render();
}

var render = () => {
    ul.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        console.log(list[i]);
        ul.innerHTML += `
        <li class = "list-group-item d-flex justify-content-between align-items-center" >
            <div>
                <div class = "mr-2 d-inline-block" data-key="${i}">
                    <i class = "fas fa-pencil-alt"></i>
                    <i class = "fas fa-trash-alt m-1"></i> 
                </div>
                <p class = "d-inline-block mb-0">${list[i]}</p> 
            </div>
            <span class = "badge badge-primary badge-pill red">
                <i class = "fas fa-skull-crossbones"></i>
            </span>
        </li>
        `;
    }
}