const Food = require('../models/food');

exports.getIndex = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const foods = Food.fetchAll(foods =>{
        res.render('shop/index', { food: foods, docTitle: 'Shop', path: '/'})
    });
   
}

exports.getFoods = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const foods = Food.fetchAll(foods =>{
        res.render('shop/product-list', { food: foods, docTitle: 'Shop', path: '/products'})
    });
   
}

exports.getFood = (req,res,next) =>{
    const prodId = req.params.productId;
    console.log(prodId)
    Food.findById(prodId,foods =>{
        res.render('shop/product-details',{food:foods,docTitle:foods.title,path:'/products'})
    })
}

exports.getCart = (req,res,next) =>{
    res.render('shop/cart',{docTitle:'Cart',path : '/cart'})
}

exports.postCart= (req,res,next) =>{
    const prodId = req.body.productId
    console.log(prodId);
    res.redirect('/cart');
}

exports.getCheckout = (req,res,next) =>{
    res.render('shop/checkout',{docTitle:'Checkout',path:'/checkout'})
}
exports.getOrders = (req,res,next) =>{
    res.render('shop/orders',{docTitle:'Checkout',path:'/orders'})
}