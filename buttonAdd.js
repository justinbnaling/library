let addBookButton = document.getElementById("addBook")
addBookButton.addEventListener("click", addBookToLibrary)

// function addBook(){
//     let title = document.getElementById("title");
//     console.log(title.value);
// }


function addBookToLibrary() {
    let title = document.getElementById("title").value;
    // let author = document.getElementById("author").value;
    // let pages = document.getElementById("pages").value;
    // let read = document.getElementById("read").value;
    let book = new Book(title);
    myLibrary.push(book);

}

function Book(title) {
    this.title = title
    // this.author = author
    // this.pages = pages
    // this.read = read
}

let myLibrary = [];