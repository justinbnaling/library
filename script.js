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
    this.index = myLibrary.length
}

function clearBookDisplay(){
    let books = document.querySelectorAll(".card")
    books.forEach(book=>{
        console.log(book)
        book.remove()
    })
}

function displayBooks(){
    myLibrary.forEach((book, index)=>{
        // create book element
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("card");
        bookDiv.classList.add(`${index}`);

        // add text to element
        bookDiv.innerText =  
        `Title: ${book.title}
        Author: ${book.author}
        Pages: ${book.pages}
        Read: ${book.read}
        `
        // delete button element
        const deleteButton = document.createElement("button");
        deleteButton.innerText = `Delete Book`
        bookDiv.appendChild(deleteButton)
        deleteButton.addEventListener("click", deleteBook)

        // read status element
        const readButton = document.createElement("button");
        readButton.innerText = `Change read status`
        bookDiv.appendChild(readButton)
        readButton.addEventListener("click", readStatus)

        // add books div to main
        const target = document.querySelector("main")
        target.appendChild(bookDiv)
    })
}

function deleteBook(event){
    let deleteNum = event.target.parentElement.classList
    myLibrary.splice(deleteNum[1], 1);
    clearBookDisplay()
    displayBooks()
}

function readStatus(event){
    let bookNum = event.target.parentElement.classList
    if (myLibrary[bookNum[1]].read == "Yes")
        {myLibrary[bookNum[1]].read = "No"}
    else
        {myLibrary[bookNum[1]].read = "Yes"}
    clearBookDisplay()
    displayBooks()
}