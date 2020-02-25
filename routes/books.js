var express = require('express');
var router = express.Router();

const booksController = require('../controllers/books');

router.get('/listBooks', booksController.listBooks);
router.post('/addBooks', booksController.addBooks);
router.post('/updateBook', booksController.updateBook);
router.post('/deleteBook', booksController.deleteBook);


module.exports = router;
