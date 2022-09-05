// Add nút Delete cho các phần tử trong list
let bookList = document.getElementsByTagName("li");
for (let i = 0; i < bookList.length; i++) {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";
    bookList[i].appendChild(deleteButton);
}

// Click vào nút Delete sẽ xóa list
let deleteList = document.querySelectorAll(".delete-btn");
for (let i = 0; i < deleteList.length; i++) {
    deleteList[i].onclick = function() {
        deleteList[i].parentElement.style.display = "none";
    }
}

// Thêm nội dung vào list
function addBook() {
    let ul = document.querySelector("#book-list");
    let input = document.querySelectorAll("input")[1];

    let newList = document.createElement("li");
    let newBook = document.createElement("span");
    newBook.textContent = input.value;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete-btn";
    newList.appendChild(newBook);
    newList.appendChild(deleteButton);

    if (input.value === "") {
        alert ("khong duoc de trong");
        return false;
    } else {
        ul.appendChild(newList);
    }
}

//Tìm sách trên ô search
let searchValue = document.querySelectorAll("input")[0];
let bookName = document.querySelectorAll(".name");
function searchBook() {
    let value = searchValue.value.toLocaleLowerCase();
    for (let i = 0; i < bookName.length; i++) {
        if (!bookName[i].textContent.toLowerCase().includes(value)) {
            bookList[i].style.display = "none";
        }
        else {
            bookList[i].style.display = "";
        }
    }
}

