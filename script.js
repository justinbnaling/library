let myLibrary = [];
let addBookButton = document.getElementById("addBook")
addBookButton.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {   
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = "No"

    if (document.getElementById("Yes").checked){read = "Yes"}
    
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
