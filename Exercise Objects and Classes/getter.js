class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get totalPrice(){
        return this.price * this.quantity;
    }
}

let product = new Product('Bread', 2.50, 4);
console.log(product.totalPrice);
product.quantity = 6;
console.log(product.totalPrice);

    // • Constructor-ът получава name, price и quantity.
    // • Направи getter totalPrice.
    // • Getter-ът връща price * quantity.
    // • Очакван резултат: 10 и после 15.
    // • Не прави this.totalPrice в constructor-а.