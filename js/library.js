'use strict'

const myLibrary = [
    new Book('Prince of Thorns', 'Mark Lawrence', 336, true),
    new Book('Shantaram', 'Gregory David Roberts', 944, true),
    new Book('The Devil\'s Teeth', 'Susan Casey', 304, true)
];
console.log(myLibrary);

function Book(title, author, pages, read, spanIdNum) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.span = document.getElementById(`book-${spanIdNum}`);
    this.bookInfo = function() {
        let readText = null
        if (this.read === true) {
            readText = 'read';
        } else if (this.read === false) {
            readText = 'not read yet';
        }
        let info = `${this.title} by ${this.author}, ${this.pages} pages, ${readText}`;
        return info
    }
};


function addBookToLibrary() {
 let x = 1;
}


// display new book form
const NewBookForm = {
    body: document.querySelector('body'),
    newBookBtn: document.getElementById('new-book-btn'),
    newBookForm: document.getElementById('new-book-form'),
    toggle: false,
    openForm: function() {
        this.newBookForm.style.display = 'block';
        this.toggle = true;
    },
    closeForm: function() {
        this.newBookForm.style.display = 'none';
        this.toggle = false;
    }
}
NewBookForm.body.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id) {
        case 'new-book-btn':
            if (NewBookForm.toggle === false) {
                NewBookForm.openForm();
            } else {
                NewBookForm.closeForm();
            }
            break;
        case 'submit-book-btn':
            const form = document.getElementById('new-book-data');
            // prevent form from submitting data
            e.preventDefault();

            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const pages = document.getElementById("pages").value;
            const read = document.getElementById("read").value;
            const book = new Book(title, author, pages, read);
            myLibrary.push(book);
            let newBook = myLibrary[myLibrary.length - 1];
            newBook = formatBookToString(newBook)
            const bookList = document.getElementById('book-list');
            const listItem = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = newBook;
            const deleteBtn = document.createElement('button'); // add btn to delete list item
            deleteBtn.textContent = 'Delete'; // add button text
            deleteBtn.setAttribute('id', 'delete_btn'); // add id to delete button
            // append span and button to list item
            listItem.appendChild(span);
            listItem.appendChild(deleteBtn);
            bookList.appendChild(listItem);
            deleteBtn.addEventListener('click', () => {
                listItem.remove();
            })
            
            form.reset();
            NewBookForm.closeForm();
        case 'close-form':
            NewBookForm.closeForm();
        // default:
        //     NewBookForm.closeForm();
    } 
});


function formatBookToString(book) {
    const str = `${book.title} by ${book.author}, ${book.pages} pages.`;
    return str;
}

// display books stored in the initial array
for (const item of myLibrary) {
    const book = formatBookToString(item);
    const bookList = document.getElementById('book-list');
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = book;
    const deleteBtn = document.createElement('button'); // add btn to delete list item
    deleteBtn.textContent = 'Delete'; // add button text
    deleteBtn.setAttribute('id', 'delete_btn'); // add id to delete button
    // append span and button to list item
    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);
    bookList.appendChild(listItem);
    deleteBtn.addEventListener('click', () => {
        listItem.remove();
    })
    // input.value = ''; // clear 
}