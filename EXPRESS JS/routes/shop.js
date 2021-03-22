const express = require('express')
const path = require('path')

const rootDir = require('../util/path.js')
const router = express.Router();
const app = express();


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;