var list = document.getElementById("list");
var items = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByClassName("deletebtn");
var input = document.getElementById("input");
var btn = document.getElementById("btn");

//deleting items

for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", deleteItem, false);
}

function deleteItem(event) {
    event.target.parentNode.remove();
}


//adding items with delete button

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var addedDelete = document.createElement("button");
    addedDelete.innerHTML = "Delete";
    addedDelete.onclick = deleteItem;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(addedDelete);

    list.appendChild(li);
    input.value = "";
}

//strikethrough


for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (event) {
        event.target.classList.add("done");
    })
}


//click and keypress

function addItemAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addItemAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

btn.addEventListener("click", addItemAfterClick);

input.addEventListener("keypress", addItemAfterKeyPress);
