// Todo List Application
// This code allows users to add items to a todo list and delete them.
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";

});


// Concept of delegation

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
        
    }
}); 
inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btn.click();
    }
});

btn.addEventListener("click", function (event) {
    if (inp.value.trim() === "") {
        alert("Please enter a todo item.");
        inp.value = "";
        inp.focus();
        event.stopImmediatePropagation();
    }
}, true);