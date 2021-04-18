const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Food{
    constructor(id,title,data,price,desc){
        this.id = id;
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
        
    }

    static deleteById(id) {
        
    }

    static fetchAll(){
        return db.execute('select * from foods')
    }

    static findById(id,cb){
        
    }
}