var express = require('express');
var router = express.Router();

const dashboardController = require('../controllers/dashboard');

router.get('/getMetaData', dashboardController.metaData);

module.exports = router;
