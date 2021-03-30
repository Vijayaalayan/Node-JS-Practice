const express = require('express')
const path = require('path')

// const rootDir = require('../util/path.js')
const productController = require('../controllers/shop')
const adminData = require('./admin')

const router = express.Router();


router.get('/', productController.getIndex);
router.get('/products',productController.getFoods);
router.get('/products/:productId',productController.getFood);
router.get('/cart',productController.getCart);
router.get('/checkout',productController.getCart);
router.get('/orders',productController.getOrders);
module.exports = router;