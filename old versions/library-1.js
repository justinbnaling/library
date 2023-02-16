let myLibrary = [];
let libraryElement = document.querySelector(".libraryElement")

let btnAddBook = document.querySelector("#addBook");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.getElementsByName("read");

btnAddBook.addEventListener("click", addLibraryBook);

function Book(author, title, pages) {
    this.author = author,
    this.title = title,
    this.pages = pages
}

function addLibraryBook() {
    let myBook = new Book(author.value, title.value, pages.value);
    if (read[0].checked) {myBook.read = "Read"} 
    else {myBook.read  = "Not Read"}
    myLibrary.push(myBook);
    displayLibraryBooks();
}

function displayLibraryBooks() {
    let output ="";
    for (i=0; i<myLibrary.length; i++) {

        output = libraryElement.innerHTML +
        `
        <div class="book">
          <div> Author: ${myLibrary[i].author} </div>
          <div> Title: ${myLibrary[i].title} </div>
          <div> Pages: ${myLibrary[i].pages} </div>
          <div> Read: ${myLibrary[i].read} </div>
        </div>
        `
    }
    // clear display
    libraryElement.innerHTML = "";
    // re-add content
    libraryElement.innerHTML = output;

  }

let addBookButton = document.querySelector(".blurButton")
let body = document.querySelector("body")

blurButton.addEventListener("click", blurScreen)
function blurScreen() {
    body.classList.add("blur");
}

let addBook = document.querySelector(".addBook")
addBook.style.display="none"