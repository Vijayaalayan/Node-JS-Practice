const express = require('express')
const path = require('path')

const rootDir = require('../util/path.js')
const router = express.Router();
const app = express();

//use it with either post or get as in like app.get or app.post to parse
router.get('/add-food',(req,res,next) =>{
    res.sendFile(path.join(rootDir,'views','add-food.html'));
});

const foods = [];
//same path can be used for different method
router.post('/add-food',(req,res,next)=>{
    foods.push({title : req.body.title})
    res.redirect('/');
});

exports.routes = router;
exports.foods = foods;