const RESPONSE = require('../utils/responseHandler');
const JWT = require('../utils/JWT');
const Books = require('../models').books;
const uuid4 = require('uuid4');

module.exports.listBooks = (req, res, next) => {
    // const jwtAuthHeader = req.getHeader('Auth');
    // console.log(jwtAuthHeader);

    Books.listBooks()
        .then(data => {
            console.log("List of books",data)
            RESPONSE.successDataResponse(res, data);
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error retriving books");

        })

}


module.exports.addBooks = (req, res, next) => {
    // const jwtAuthHeader = req.getHeader('Auth');
    // console.log(jwtAuthHeader);
    req.body['id'] = 'bk-' + uuid4();
    Books.addBooks(req.body)
        .then(data => {
            RESPONSE.successDataResponse(res, "Book Added Successfully");
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error Adding Books user");
        })

}


module.exports.updateBook = (req, res, next) => {
    // const jwtAuthHeader = req.getHeader('Auth');
    // console.log(jwtAuthHeader);
    Books.updateBook(req.body)
        .then(data => {
            RESPONSE.successDataResponse(res, "Book Updated Successfully");
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error Updating Books");
        })

}



module.exports.deleteBook = (req, res, next) => {
    // const jwtAuthHeader = req.getHeader('Auth');
    // console.log(jwtAuthHeader);
    Books.deleteBook(req.body)
        .then(data => {
            RESPONSE.successDataResponse(res, "Book Deleted Successfully");
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error Deleting Books");
        })

}