let myLibrary = [];
let libraryElement = document.querySelector(".libraryElement")

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let read = document.getElementsByName("read");

let btnAddBook = document.querySelector("#btnAddBook");
btnAddBook.addEventListener("click", addLibraryBook);

function Book(author, title, pages) {
    this.author = author,
    this.title = title,
    this.pages = pages
}

let indexNum = 0;

function addLibraryBook() {

    let myBook = new Book(author.value, title.value, pages.value);
    if (read[0].checked) {myBook.read = "Read"} 
    else {myBook.read  = "Not Read"}
    myBook.indexNum = indexNum;
    myLibrary.push(myBook);
    indexNum++;
    displayLibraryBooks();
    closeCreateBook();
}

function displayLibraryBooks() {
    // clear display
    libraryElement.innerHTML = "";
    
    myLibrary.forEach(item =>{
        let bookAuth = document.createElement("div");
        let bookTitle = document.createElement("div");
        let bookPages = document.createElement("div");
        let bookRead = document.createElement("div");
        let btnDelete = document.createElement("button");
        let linebreak = document.createElement("br");

        bookAuth.innerText = item.author;
        bookTitle.innerText = item.title;
        bookPages.innerText = item.pages;
        btnDelete.innerText = `Delete Book`;
        btnDelete.addEventListener("click", function(){
            deleteBook(item);
        })

        let bookStatus = document.createElement("div")
        bookStatus.innerText = "Completed:"
        let radioYes = document.createElement("INPUT");
        radioYes.setAttribute("type", "radio");
        radioYes.setAttribute("name",  `read_status${item.indexNum}`)
        radioYes.setAttribute("value", "Yes")
        let labelYes = document.createElement("label");
        labelYes.setAttribute("for", "Yes");
        labelYes.innerText = "Yes"

        let radioNo = document.createElement("INPUT");
        radioNo.setAttribute("type", "radio");
        radioNo.setAttribute("name",  `read_status${item.indexNum}`)
        radioNo.setAttribute("value", "No")

        let labelNo = document.createElement("label");
        labelNo.setAttribute("for", "No");
        labelNo.innerText = "No"
       
        libraryElement.append(bookAuth);
        bookAuth.append(bookTitle);
        bookAuth.append(bookPages);
        bookAuth.append(bookRead);
        bookAuth.append(btnDelete);
        bookAuth.append(linebreak);
        bookAuth.append(bookStatus)
        bookAuth.append(labelYes);
        bookAuth.append(radioYes);
        bookAuth.append(labelNo);
        bookAuth.append(radioNo);

        if(item.read == "Read"){
            radioYes.checked = "true;"
            }
        else{
            radioNo.checked = "true;"
        }

        radioYes.addEventListener("change", function(){
            console.log("no changed to yes")
            item.read="Read"
        })
        radioNo.addEventListener("change", function(){
            console.log("yes changed to no")
            item.read="Not Read"
        })

    })
}


function deleteBook(book){
    myLibrary.splice(book.indexNum, 1);
    // rebuild index
    let reIndexNum=0;
    myLibrary.forEach(item =>{
        item.indexNum = reIndexNum;
        reIndexNum++;
    })
    displayLibraryBooks();
}

let wrapperAddBook = document.querySelector(".wrapperAddBook");
wrapperAddBook.style.display="none";

let buttonCreateBook = document.querySelector(".btnCreateBook");
buttonCreateBook.addEventListener("click", displayAddBook);

let wrapperMyLibrary = document.querySelector(".wrapperMyLibrary")
let wrapperCreateBook = document.querySelector(".wrapperCreateBook")

function displayAddBook(){
    wrapperAddBook.style.display="flex";
    wrapperMyLibrary.style.display="none";
    wrapperCreateBook.style.display="none"
}

let buttonCloseCreateBook = document.querySelector(".close")
buttonCloseCreateBook.addEventListener("click", closeCreateBook )
function closeCreateBook() {
    wrapperAddBook.style.display="none";
    wrapperMyLibrary.style.display="block";
    wrapperCreateBook.style.display="flex";
}

