var express = require('express');
var router = express.Router();

const ordersController = require('../controllers/orders');

router.post('/placeOrder', ordersController.placeOrder);
router.post('/listOrders', ordersController.listOrders);


module.exports = router;
