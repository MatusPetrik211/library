const addBook = document.querySelector('.add-book');
const bookContainer = document.querySelector('.book-container');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const confirmBtn = document.querySelector('#confirmBtn');
const closeBtn = document.querySelector('#closeBtn');
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const read = document.querySelector('#read').value;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

// Examples
//let book1 = new Book('Atomic Habits', 'James Clear', 320, 'Read');
//let book2 = new Book('Think like a programmer', 'V. Anton Spraul', 233, 'Not Read');
//let book3 = new Book('Don\'t Believe Everything You Think', 'Joseph Nguyen', 126, 'Not Read');
//let book4 = new Book('Tao Te Ching', 'Lao Tzu', 128, 'Not Read');

let myLibrary = [];

function displayBooks() {
    for(let book of myLibrary) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookContainer.appendChild(bookDiv);

        const bookTitle = document.createElement('h2');
        bookDiv.appendChild(bookTitle);
        bookTitle.textContent = book.title;
        bookTitle.classList.add('book-title');

        const bookAuthor = document.createElement('h3');
        bookDiv.appendChild(bookAuthor);
        bookAuthor.textContent = `Author: ${book.author}`;

        const bookPages = document.createElement('h4');
        bookDiv.appendChild(bookPages);
        bookPages.textContent = `Pages: ${book.pages}`;

        const readState = document.createElement('button');
        bookDiv.appendChild(readState);
        readState.classList.add('read-button');
        readState.textContent = book.read;

        readState.addEventListener('click', () => {
            if(book.read === 'Read') {
                book.read = 'Not Read'
            }
            else{
                book.read = 'Read'
            }
            readState.textContent = book.read;
        });

        const removeBtn = document.createElement('button');
        bookDiv.appendChild(removeBtn);
        removeBtn.classList.add('remove-button');
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', () => {
            removeBtn.parentNode.remove();
            myLibrary = myLibrary.filter(item => item !== book);
            console.log(myLibrary);
        });
    }
}

displayBooks();

addBook.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
});

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close()
});

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read');

    if(validate(title) && validate(author) && validate(pages)) {
        let book = new Book(title, author, pages, read.checked ? 'Read' : 'Not Read');
        myLibrary.push(book);
        bookContainer.textContent = '';
        displayBooks();
        dialog.close();
    } else {
        alert('You need to fill out the whole form');
    }
});

function validate(input) {
    input = input.trim();
    if(input === '') {
        return false;
    }
    return true;
}
