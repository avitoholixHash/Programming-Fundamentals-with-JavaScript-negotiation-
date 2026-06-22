class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.totalPrice = price * quantity;
    }
    getInfo(){
        return `${this.name} costs ${this.totalPrice}.`
    }
}

let product = new Product('Bread', 2.50, 4);
console.log(product.totalPrice);
console.log(product.getInfo());


    // • Constructor-ът получава name, price и quantity.
    // • Добави this.totalPrice = price * quantity.
    // • getInfo() връща: Bread costs 10.