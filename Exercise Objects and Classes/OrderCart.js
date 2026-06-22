class OrderCart {
    constructor(){
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    get totalCost(){
        let total = 0;
        for (const product of this.products) {
            total += product.price * product.quantity;
        }
        return total;
    }

    getProducts(){
        let print = [];
        for (const product of this.products) {
            print.push(JSON.stringify(product));
        }
        return print.join('\n');
    }
}

let cart = new OrderCart();
cart.addProduct({ name: 'Bread', price: 2.50, quantity: 2 });
cart.addProduct({ name: 'Milk', price: 4.20, quantity: 1 });
console.log(cart.totalCost);
console.log(cart.getProducts());

    // • Constructor-ът не получава параметри.
    // • Създай this.products като празен масив.
    // • addProduct(product) само добавя продукта в масива.
    // • getter totalCost пресмята общата цена на всички продукти.
    // • getProducts() връща продуктите като JSON string, всеки на нов ред.