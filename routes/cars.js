var express = require('express');
const cars_controllers= require('../controllers/cars');
var router = express.Router();

router.get('/', cars_controllers.cars_view_all_Page );

router.get('/cars/:id', cars_controllers.cars_detail);


module.exports = router;

