const RESPONSE = require('../utils/responseHandler');
const Orders = require('../models').orders;
const Books = require('../models').books;
const uuid4 = require('uuid4');

module.exports.listOrders = (req, res, next) => {
    Orders.listOrders(req.body)
        .then(data => {
            RESPONSE.successDataResponse(res, data);
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error retriving orders");

        })

}


module.exports.placeOrder = (req, res, next) => {
    req.body['id'] = 'ord-' + uuid4();
    Orders.placeOrder(req.body)
        .then(data => {
            if(req.body.quantity < 0){
                RESPONSE.successDataResponse(res, "Book Out of Stock");
            } else {
                Books.updateBook(req.body).then(data => {
                    RESPONSE.successDataResponse(res, "Order Placed Successfully");
                });
            }  
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error Placing Order");
        })

}