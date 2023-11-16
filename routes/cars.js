var express = require('express');
const cars_controllers= require('../controllers/cars');
var router = express.Router();

router.get('/', cars_controllers.cars_view_all_Page );

router.get('/cars/:id', cars_controllers.cars_detail);

router.get('/detail', cars_controllers.cars_view_one_Page);

router.get('/create', cars_controllers.cars_create_Page);

router.get('/update', cars_controllers.cars_update_Page);

router.get('/delete', cars_controllers.cars_delete_Page);



module.exports = router;

