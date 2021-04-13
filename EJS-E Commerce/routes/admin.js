const express = require('express')
const path = require('path')

const adminController = require('../controllers/admin')
// const rootDir = require('../util/path.js')
const router = express.Router();
const app = express();

//use it with either post or get as in like app.get or app.post to parse
router.get('/add-food',adminController.getAddFood);


//same path can be used for different method
router.post('/add-food',adminController.postAddFood);

router.get('/foods',adminController.getFood);

router.get('/edit-food/:productId',adminController.getEditFood)

router.post('/edit-food',adminController.postEditFood)
exports.routes = router;
