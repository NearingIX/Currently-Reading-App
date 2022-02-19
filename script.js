//Add a book to the list

function addItem() {
  let list = document.getElementById("list");
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
 
  let pagesRead = document.getElementById("pagesRead").value;
  let totalPages = document.getElementById("totalPages").value;
  let newItem =
    bookTitle +
    " by " +
    bookAuthor +
    " [" +
    pagesRead +
    " out of " +
    totalPages +
    " Pages]";
  let submission = document.createElement("li");
  submission.appendChild(document.createTextNode(newItem));
  list.appendChild(submission);
}

document.getElementById("itemSubmit").onclick = addItem;

//Clear the list

function clearList() {
  document.getElementById("list").innerHTML = "";
}

document.getElementById("clearList").onclick = clearList;

//Edit list when clicked on

let editList = document.querySelector("ul");

editList.onclick = function() {
  
  editList.contentEditable = true;
};