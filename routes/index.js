var express = require('express');
var router = express.Router();
const accounts = require('./accounts')
const books = require('./books')
const orders = require('./orders')
const dashboard = require('./dashboard')


router.use('/accounts',accounts)
router.use('/books',books)
router.use('/orders',orders)
router.use('/dashboard',dashboard)


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Hey Hello");
});

module.exports = router;
