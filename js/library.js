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
            // get submitted form data
            const form = document.getElementById('new-book-data');
            // prevent form from submitting data
            e.preventDefault();

            const title = document.getElementById("title").value;
            const author = document.getElementById("author").value;
            const pages = document.getElementById("pages").value;
            const read = document.getElementById("read").value;
            const book = new Book(title, author, pages, read);
            myLibrary.push(book);
            addRow(book);            
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

function addRow(book) {
    const bookTable = document.getElementById('book-table');
    const newRow = document.createElement('tr');
    const column01 = document.createElement('td');
    const column02 = document.createElement('td');
    const column03 = document.createElement('td');
    column03.setAttribute('class', 'column-3-data')
    const column04 = document.createElement('td');
    const column05 = document.createElement('td');
    column01.textContent = book.title;
    column02.textContent = book.author;
    column03.textContent = book.pages;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('id', 'delete-btn');
    column05.appendChild(deleteBtn);
    newRow.appendChild(column01);
    newRow.appendChild(column02);
    newRow.appendChild(column03);
    newRow.appendChild(column04);
    newRow.appendChild(column05);
    bookTable.appendChild(newRow);
    deleteBtn.addEventListener('click', () => {
        newRow.remove();
    })
}

// add books in array to DOM table
for (const book of myLibrary) {
    addRow(book);
}

