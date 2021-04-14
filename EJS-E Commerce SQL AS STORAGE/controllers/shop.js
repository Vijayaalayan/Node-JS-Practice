const Food = require('../models/food');
const Cart = require('../models/cart');

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
    // console.log(prodId)
    Food.findById(prodId,food =>{
        res.render('shop/product-details',{foods:food,docTitle:food.title,path:'/products'})
    })
}

exports.getCart = (req,res,next) =>{
    Cart.getCart(cart =>{
        Food.fetchAll(foods=>{
            const cartProducts = [];
            for(food of foods){
                const cartProductData = cart.foods.find(prod => prod.id === food.id);
                if(cartProductData){
                    cartProducts.push({productData:food,qty:cartProductData.qty})
                }
            }
            res.render('shop/cart',{
                docTitle:'Cart',
                path : '/cart',
                foods: cartProducts
            })
        })
    })
    
}

exports.postCart= (req,res,next) =>{
    const prodId = req.body.productId
    console.log(prodId);
    Food.findById(prodId,food=>{
        // console.log(food.price);
        Cart.addFood(prodId,food.price);
    })
    res.redirect('/cart');
}
exports.postDeleteCartItem = (req,res,next) =>{
    const prodId = req.body.productId;
    Food.findById(prodId,product =>{
        Cart.deleteFood(prodId,product.price);
        res.redirect('/cart');
    })
}

exports.getCheckout = (req,res,next) =>{
    res.render('shop/checkout',{docTitle:'Checkout',path:'/checkout'})
}
exports.getOrders = (req,res,next) =>{
    res.render('shop/orders',{docTitle:'Checkout',path:'/orders'})
}