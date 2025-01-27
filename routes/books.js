const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/list', booksController.getBooks); 
router.get('/:id', booksController.getBookById);
router.post('/add', booksController.addBook);
router.delete('/delete/:id', booksController.deleteBook);

module.exports = router;
