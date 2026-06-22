class Storage {
    constructor(capacity){
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product){
        this.storage.push(product);
        this.capacity -= product.quantity;
        this.totalCost += product.quantity * product.price;
    }

    getProducts(){
        let curent = [];
        for (const product of this.storage) {
            curent.push(JSON.stringify(product));
        }
        return curent.join('\n');
    }
}

let productOne = { name: 'Cucumber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

    // • Constructor-ът получава capacity.
    // • Създай this.storage = [] и this.totalCost = 0.
    // • addProduct(product) добавя продукта, намалява capacity и увеличава totalCost.
    // • getProducts() връща всички продукти като JSON string, всеки на нов ред.