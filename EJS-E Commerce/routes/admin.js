const express = require('express')
const path = require('path')

const productController = require('../controllers/foods')
// const rootDir = require('../util/path.js')
const router = express.Router();
const app = express();

//use it with either post or get as in like app.get or app.post to parse
router.get('/add-food',productController.getAddFood);


//same path can be used for different method
router.post('/add-food',productController.postAddFood);

exports.routes = router;
