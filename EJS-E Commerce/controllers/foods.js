const Food = require('../models/food');

exports.getAddFood = (req,res,next) =>{
    // res.sendFile(path.join(rootDir,'views','add-food.html'));
    res.render('add-food',{docTitle:'Add Food', path:'/admin/add-food',foodCSS:true,formsCSS:true,activeAddFood:true,})
}

exports.postAddFood = (req,res,next)=>{
    const food = new Food(req.body.title,req.body.data,req.body.price,req.body.desc);
    food.save();
    res.redirect('/');
}

exports.getFood = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const foods = Food.fetchAll();
    res.render('shop', { food: foods, docTitle: 'Shop', path: '/', hasFood: foods.length > 0,activeShop:true,foodCSS:true })
}