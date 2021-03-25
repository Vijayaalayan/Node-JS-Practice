const express = require('express')
const path = require('path')

const rootDir = require('../util/path.js')
const adminData = require('./admin')

const router = express.Router();


router.get('/',(req,res,next)=>{
    console.log(adminData.foods)
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;