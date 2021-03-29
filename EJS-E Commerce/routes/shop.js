const express = require('express')
const path = require('path')

// const rootDir = require('../util/path.js')
const productController = require('../controller/foods')
const adminData = require('./admin')

const router = express.Router();


router.get('/', productController.getFood);

module.exports = router;