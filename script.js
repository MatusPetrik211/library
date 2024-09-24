const addBook = document.querySelector('.add-book');
const bookContainer = document.querySelector('.book-container');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

let book1 = new Book('Atomic Habits', 'James Clear', 320, 'Read');
let book2 = new Book('Think like a programmer', 'V. Anton Spraul', 233, 'Not Read');
let book3 = new Book('Don\'t Believe Everything You Think', 'Joseph Nguyen', 126, 'Not Read');
let book4 = new Book('Tao Te Ching', 'Lao Tzu', 128, 'Not Read');

const myLibrary = [book1, book2, book3, book4];

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
        });
    }
}

displayBooks();

addBook.addEventListener('click', () => {
    const book = document.createElement('div');
    book.classList.add('book');
    bookContainer.appendChild(book);
});

function addBookToLibrary() {

}


