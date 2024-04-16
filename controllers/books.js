const Book = require('../models/book');

let books = [];

exports.addBook = (req, res) => {
    const { title, author, year } = req.body;
    const newBook = new Book(generateId(), title, author, year);
    books.push(newBook); 
    res.redirect('/book/list'); 
};


exports.deleteBook = (req, res) => {
    const id = req.params.id; 
    
    books = books.filter(book => book.id !== id);
    res.redirect('/book/list'); 
};

exports.getBookById = (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id === id);
    if (!book) {
        res.status(404).send("Book not found");
    } else {
        res.render('book', { book });
    }
}    

function generateId() {
    return Date.now().toString(); 
}
