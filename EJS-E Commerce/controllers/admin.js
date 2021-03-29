const Food = require('../models/food');

exports.getAddFood = (req,res,next) =>{
    // res.sendFile(path.join(rootDir,'views','add-food.html'));
    res.render('admin/add-food',{docTitle:'Add Food', path:'/admin/add-food'})
}

exports.postAddFood = (req,res,next)=>{
    const food = new Food(req.body.title,req.body.image,req.body.price,req.body.desc);
    food.save();
    res.redirect('/');
}

exports.getFood = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const foods = Food.fetchAll(foods =>{
        res.render('admin/foods', { food: foods, docTitle: 'Admin Foods', path: '/admin/foods'})
    });
   
}