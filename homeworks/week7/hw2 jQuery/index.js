$(function () {
    var ul = $('.list-group');
    const todoInput = $('.form-control');
    var editTimes = 0;
    var html = "";
    $(".container").on("click", (e) => {
        if (e.target.className == "btn btn-info") {
            if (todoInput.val() != "") {
                html = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <div class="mr-2 d-inline-block">
                            <i class="fas fa-pencil-alt"></i>
                            <i class = "fas fa-trash-alt m-1"></i>
                        </div>
                        <p class="d-inline-block mb-0">${todoInput.val()}</p>
                    </div>
                    <span class = "badge badge-primary badge-pill red"><i class = "fas fa-skull-crossbones"></i></span>
                </li>`;
                ul.append(html);
                todoInput.val("");
            }
        }
        if (e.target.className === "fas fa-pencil-alt" && editTimes == 0) {
            editTimes++;
            var todoThing = $(e.target).parent().next().html();
            var editInputHTML = `
            <div class = "d-inline-flex flex-wrap">
                <div class = "form-group d-inline-block mb-0">
                    <input class = "form-control form-control-sm d-inline-block" type = "text" placeholder = ".form-control-sm"
                                        id = "inputSmall"  value =${todoThing}>
                </div>
                <button type = "button"
                class = "btn btn-outline-info ml-3">Add</button>
            </div>`;
            $(e.target).parent().next().prop("outerHTML", editInputHTML);
        };
        if (e.target.className == "fas fa-trash-alt m-1") {
            $(e.target).closest('li').prop("outerHTML", "");
        }
        if (e.target.className === "btn btn-outline-info ml-3") {
            editTimes = 0;
            var editValue = $(e.target).prev().children().val();
            var editDoneHTML = `<p class = "d-inline-block mb-0">${editValue}</p>`;
            $(e.target).parent().prop("outerHTML", editDoneHTML);
        }
        if (e.target.className == "fas fa-skull-crossbones") {
            $(e.target).parent().removeClass("red");
            $(e.target).parent().addClass("green");
            var checkHTML = `<i class="fas fa-check"></i>`;
            $(e.target).parent().html(checkHTML);
        }
    })
})













// const container = document.querySelector(".container");
// const ul = document.querySelector(".list-group");
// const todoInput = document.querySelector('.form-control');
// var editTimes = 0;
// container.addEventListener('click', (e) => {
//     if (e.target.className === 'btn btn-info') {
//         if (todoInput.value == "") return;
//         ul.innerHTML += `
//         <li class="list-group-item d-flex justify-content-between align-items-center">
//             <div>
//                 <div class="mr-2 d-inline-block">
//                     <i class="fas fa-pencil-alt"></i>
//                     <i class = "fas fa-trash-alt m-1"></i>
//                 </div>
//                 <p class="d-inline-block mb-0">${todoInput.value}</p>
//             </div>
//             <span class = "badge badge-primary badge-pill red"><i class = "fas fa-skull-crossbones"></i></span>
//         </li>`;
//         todoInput.value = "";

//     }

//     if (e.target.className === "fas fa-pencil-alt" && editTimes === 0) {
//         editTimes++;
//         var todoThing = e.target.parentElement.nextElementSibling.innerHTML;
//         e.target.parentElement.nextElementSibling.outerHTML = `
//         <div class = "d-inline-flex flex-wrap">
//             <div class = "form-group d-inline-block mb-0">
//                 <input class = "form-control form-control-sm d-inline-block" type = "text" placeholder = ".form-control-sm"
//                 id = "inputSmall"  value =${todoThing}>
//             </div>
//             <button type = "button"
//             class = "btn btn-outline-info ml-3">Add</button>
//         </div>`;
//     };
//     if (e.target.className === "btn btn-outline-info ml-3") {
//         editTimes = 0;
//         e.target.parentElement.outerHTML = `<p class = "d-inline-block mb-0">${e.target.previousElementSibling.children[0].value}</p>`
//     }

//     if (e.target.className == "fas fa-trash-alt m-1") {
//         e.target.parentElement.parentElement.parentElement.outerHTML = "";
//     }
//     if (e.target.className == "fas fa-skull-crossbones") {
//         e.target.parentElement.classList.remove("red");
//         e.target.parentElement.classList.add("green");
//         e.target.parentElement.innerHTML = `<i class="fas fa-check"></i>`

//     }
// })