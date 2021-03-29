const foods = [];

module.exports = class Food{
    constructor(title,data,price,desc){
        this.title = title;
        this.data = data;
        this.price = price;
        this.desc = desc;
    }

    save(){
        foods.push(this);
    }

    static fetchAll(){
        return foods;
    }
}