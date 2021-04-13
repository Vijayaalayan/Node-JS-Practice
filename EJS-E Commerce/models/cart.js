const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'    
);

module.exports = class Cart{
    static addFood(id,foodPrice){
        // console.log(foodPrice);
        // Fetch previous cart
        fs.readFile(p,(err,fileContent)=>{
            let cart = {foods:[],totalPrice:0}
            if(!err){
                cart = JSON.parse(fileContent);
            }
            // Analyse cart => Find existing food
            const existingProductIndex = cart.foods.findIndex(food => food.id === id);
            const existingProduct = cart.foods[existingProductIndex];
            let updatedProduct;
            // Add new food / increase quantity
            if(existingProduct){
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty +1;
                cart.foods = [ ...cart.foods ];
                cart.foods[existingProductIndex] = updatedProduct;
            }else{
                updatedProduct = {id:id,qty:1};
                cart.foods = [...cart.foods,updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +foodPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>{
                console.log(err);
            });
            
        })
        
    }   
}
