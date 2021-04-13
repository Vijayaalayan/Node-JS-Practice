const Food = require('../models/food');

exports.getAddFood = (req,res,next) =>{
    // res.sendFile(path.join(rootDir,'views','add-food.html'));
    res.render('admin/edit-food',{docTitle:'Add Food', path:'/admin/add-food',editing:false})
}

exports.postAddFood = (req,res,next)=>{
    const food = new Food(null,req.body.title,req.body.image,req.body.price,req.body.desc);
    food.save();
    res.redirect('/');
}

exports.getEditFood = (req,res,next) =>{
    // res.sendFile(path.join(rootDir,'views','add-food.html'));
    const editMode = req.query.edit
    if(!editMode){
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Food.findById(prodId,food=>{
        if(!food){
            return res.redirect('/')
        }
        res.render('admin/edit-food',{
            docTitle:'Edit Food',
            path:'/admin/edit-food',
            editing:editMode,
            food:food

        })
    })
    
}

exports.postEditFood = (req,res,next) =>{
    const prodId = req.body.productId;
    // console.log(prodId);
    const updatedTitle = req.body.title;
    const updatedData = req.body.image;
    const updatedPrice = req.body.price;
    const updatedDesc = req.body.desc;
    const updatedProduct = new Food(prodId,updatedTitle,updatedData,updatedPrice,updatedDesc);
    updatedProduct.save();
    return res.redirect('/admin/foods')
};

exports.getFood = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const foods = Food.fetchAll(foods =>{
        res.render('admin/foods', { food: foods, docTitle: 'Admin Foods', path: '/admin/foods'})
    });
   
}

exports.postDeleteFood = (req,res,next) =>{
    const prodId = req.body.productId; 
    Food.deleteById(prodId);
    return res.redirect('/admin/foods')
}