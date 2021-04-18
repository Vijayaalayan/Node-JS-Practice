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

    save(){
        console.log(this.desc);
        return db.execute(
            'INSERT INTO foods (title, price,descr, data) VALUES (?, ?, ?, ?)',
            [this.title, this.price,this.desc, this.data]
        );
    }

    static deleteById(id) {
        
    }

    static fetchAll(){
        return db.execute('select * from foods')
    }

    static findById(id){
        return db.execute('select * from foods where foods.id = ?',[id]);
    }
}