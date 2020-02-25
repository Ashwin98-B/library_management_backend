const Books = require('../models').books;
const Orders = require('../models').orders;
const Users = require('../models').users;
const RESPONSE = require('../utils/responseHandler');

module.exports.metaData = (req, res, next) => {
    let booksData = null;
    let orderData = null;
    let userData = null;
    let jsonConstruction = {}
    Books.listBooks()
        .then(data => {
            booksData = data;
            Users.listAllUsers().then(data1 => {
                userData = data1;
                Orders.listAllOrders().then(data2 => {
                    orderData = data2;
                    jsonConstruction["totalBooks"] = booksData.length;
                    jsonConstruction["totalUsers"] = userData.length;
                    jsonConstruction["totalOrders"] = orderData.length;
                    jsonConstruction["usersData"] = userData;
                    jsonConstruction["ordersData"] = orderData;
                    RESPONSE.successDataResponse(res, jsonConstruction);
                });
            })
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error creating user");
        })

}



