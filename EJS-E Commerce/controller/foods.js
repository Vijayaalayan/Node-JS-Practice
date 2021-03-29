const foods = [];

exports.getAddFood = (req,res,next) =>{
    // res.sendFile(path.join(rootDir,'views','add-food.html'));
    res.render('add-food',{docTitle:'Add Food', path:'/admin/add-food',foodCSS:true,formsCSS:true,activeAddFood:true,})
}

exports.postAddFood = (req,res,next)=>{
    foods.push({title : req.body.title, data : req.body.image, price : req.body.price, desc : req.body.desc})
    res.redirect('/');
}

exports.getFood = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop', { food: foods, docTitle: 'Shop', path: '/', hasFood: foods.length > 0,activeShop:true,foodCSS:true })
}