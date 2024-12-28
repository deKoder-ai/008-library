'use strict'
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

const myLibrary = [];

function addBookToLibrary() {
 let x = 1;
}



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
            NewBookForm.closeForm();
        case 'close-form':
            NewBookForm.closeForm();
        // default:
        //     NewBookForm.closeForm();
    } 
});