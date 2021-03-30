const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'foods.json'    
);

const getFoodsFromFile = cb=>{
    
    fs.readFile(p, (err,fileContent) =>{
        if(err){
           cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
       
    })
}

module.exports = class Food{
    constructor(title,data,price,desc){
        this.title = title;
        this.data = data;
        this.price = price;
        this.desc = desc;
    }

    // save(){
    //     const p = path.join(
    //         path.dirname(process.mainModule.filename),
    //         'data',
    //         'foods.json'    
    //     );
    //     fs.readFile(p, (err,fileContent) =>{
    //         let foods = [];
    //         if(!err){
    //             foods = JSON.parse(fileContent);
    //         }
            // foods.push(this);
            // fs.writeFile(p,JSON.stringify(foods), (err)=>{
            //     console.log(err);
            // })
    //     })
    // }

    save(){
        this.id = Math.random().toString();
        getFoodsFromFile(foods =>{
            foods.push(this);
            fs.writeFile(p,JSON.stringify(foods), (err)=>{
                console.log(err);
            })
        })
    }

    static fetchAll(cb){
        getFoodsFromFile(cb);
    }

    static findById(id,cb){
        getFoodsFromFile(foods =>{
            const food = foods.find(p => p.id === id);
            cb(food);
        })
    }
}