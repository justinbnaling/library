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

    clearBookDisplay()
    displayBooks()

}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function clearBookDisplay(){
    // find all cards and remove them from display
    let books = document.querySelectorAll(".card")
    books.forEach(book=>{
        console.log(book)
        book.remove()
    })
}

// create card element and populate with books
function displayBooks(){
    myLibrary.forEach(book=>{
        console.log(book)
        // create a new div element
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("card");

        // and give it some content
        bookDiv.innerText =  
        `Title: ${book.title}
        Author: ${book.author}
        Pages: ${book.pages}
        Read: ${book.read}
        `
        // add the newly created element and its content into the DOM
        const target = document.querySelector("main")
        target.appendChild(bookDiv)

    })
}