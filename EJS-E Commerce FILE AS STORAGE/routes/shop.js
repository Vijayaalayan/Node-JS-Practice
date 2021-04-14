const express = require('express')
const path = require('path')

// const rootDir = require('../util/path.js')
const shopController = require('../controllers/shop')
const adminData = require('./admin')

const router = express.Router();


router.get('/', shopController.getIndex);
router.get('/products',shopController.getFoods);
router.get('/products/:productId',shopController.getFood);
router.get('/cart',shopController.getCart);
router.post('/cart',shopController.postCart);
router.get('/checkout',shopController.getCart);
router.post('/cart-delete-item',shopController.postDeleteCartItem);
router.get('/orders',shopController.getOrders);
module.exports = router; 