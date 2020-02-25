const bcrypt = require('bcrypt');
const Users = require('../models').users;
const RESPONSE = require('../utils/responseHandler');
const JWT = require('../utils/JWT');
const uuid4 = require('uuid4');

module.exports.signup = (req, res, next) => {
    req.body["id"] = "usr-"+uuid4();
    req.body.password = bcrypt.hashSync(req.body.password, 10);

    Users.createUser(req.body)
        .then(data => {
            RESPONSE.successDataResponse(res, "Signup success, Please login to access dashboard");
        })
        .catch(err => {
            console.log(err);
            RESPONSE.serverError(res, "Error creating user");

        })

}



module.exports.login = (req, res, next) => {
    Users.login(req.body)
        .then(async (data) => {
            const validatePass = await bcrypt.compare(req.body.password, data.dataValues.password);
            if (validatePass) {
                delete data.dataValues['password'];
                data.dataValues["token"] = JWT.generateToken(data.dataValues);
                RESPONSE.successDataResponse(res, data.dataValues)
            }
        })
        .catch(err => {
            next(err);
        })
}

