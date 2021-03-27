const express = require('express')
const path = require('path')

const rootDir = require('../util/path.js')
const router = express.Router();
const app = express();

//use it with either post or get as in like app.get or app.post to parse
router.get('/add-food',(req,res,next) =>{
    // res.sendFile(path.join(rootDir,'views','add-food.html'));
    res.render('add-food',{docTitle:'Add Food', path:'/admin/add-food',foodCSS:true,formsCSS:true,activeAddFood:true,})
});

const foods = [];
//same path can be used for different method
router.post('/add-food',(req,res,next)=>{
    foods.push({title : req.body.title, data : req.body.image, price : req.body.price, desc : req.body.desc})
    res.redirect('/');
});

exports.routes = router;
exports.foods = foods;