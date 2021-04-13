const Food = require('../models/food');

exports.getAddFood = (req,res,next) =>{
    // res.sendFile(path.join(rootDir,'views','add-food.html'));
    res.render('admin/edit-food',{docTitle:'Add Food', path:'/admin/add-food',editing:false})
}

exports.postAddFood = (req,res,next)=>{
    const food = new Food(req.body.title,req.body.image,req.body.price,req.body.desc);
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
    console.log('hi')
    return res.redirect('/')
};

exports.getFood = (req, res, next) => {
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    const foods = Food.fetchAll(foods =>{
        res.render('admin/foods', { food: foods, docTitle: 'Admin Foods', path: '/admin/foods'})
    });
   
}