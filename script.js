let myLibrary = [];
let addBookButton = document.getElementById("addBook")
addBookButton.addEventListener("click", addBookToLibrary)

function addBookToLibrary() {   
    let validInput = validateInputs();

    if (validInput){
        let title = document.getElementById("title").value;
        let author = document.getElementById("author").value;
        let pages = document.getElementById("pages").value;
        let read = "No"
        if (document.getElementById("Yes").checked){read = "Yes"}
        let book = new Book(title, author, pages, read);
        myLibrary.push(book);


        resetInputs();
        clearBookDisplay();
        displayBooks();
    }
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
        const target = document.querySelector("myGrid")
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

function validateInputs(){
    if (document.getElementById("title").value == ""){
        document.getElementById("title").classList.add("errorBorder")
        document.getElementById("titleError").innerText = "Title required";
        return false;
    }

    else {
        document.getElementById("title").classList.remove("errorBorder")
        document.getElementById("titleError").innerText = "";
    }

    if (document.getElementById("author").value == ""){
        document.getElementById("author").classList.add("errorBorder")
        document.getElementById("authorError").innerText = "Author required";
        return false;
    }

    else {
        document.getElementById("author").classList.remove("errorBorder")
        document.getElementById("authorError").innerText = "";
    }

    if (document.getElementById("pages").value == ""){
        document.getElementById("pages").classList.add("errorBorder")
        document.getElementById("pagesError").innerText = "Pages required";
        return false;
    }

    else {
        document.getElementById("pages").classList.remove("errorBorder")
        document.getElementById("pagesError").innerText = "";
    }

    if (isNaN(document.getElementById("pages").value)){
        document.getElementById("pages").classList.add("errorBorder")
        document.getElementById("pagesError").innerText = "Enter number";
        return false;
    }

    return true;
}

function resetInputs(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
}
