// Initialize an empty book array to store book data
let books = [];

// Function to add a new book to the library
function addBook(event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const genre = document.getElementById('book-genre').value;

    if (title && author && genre) {
        const newBook = { title, author, genre };
        books.push(newBook);  // Add the new book to the array
        displayBooks();       // Update the book list
        clearForm();          // Clear the form inputs
    }
}

// Function to display the list of books
function displayBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';  // Clear the current book list

    books.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `
            <span><strong>Title:</strong> ${book.title}</span>
            <span><strong>Author:</strong> ${book.author}</span>
            <span><strong>Genre:</strong> ${book.genre}</span>
        `;
        booksContainer.appendChild(bookItem);
    });
}

// Function to search for books
function searchBooks() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchQuery) || 
        book.author.toLowerCase().includes(searchQuery)
    );
    displayFilteredBooks(filteredBooks);
}

// Function to display the filtered book list based on the search query
function displayFilteredBooks(filteredBooks) {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';  // Clear the current list

    filteredBooks.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `
            <span><strong>Title:</strong> ${book.title}</span>
            <span><strong>Author:</strong> ${book.author}</span>
            <span><strong>Genre:</strong> ${book.genre}</span>
        `;
        booksContainer.appendChild(bookItem);
    });
}

// Function to clear the add book form inputs
function clearForm() {
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-genre').value = '';
}

// Attach the addBook function to the form submit event
document.getElementById('add-book-form').addEventListener('submit', addBook);

// Display the initial book list (empty at the start)
displayBooks();
