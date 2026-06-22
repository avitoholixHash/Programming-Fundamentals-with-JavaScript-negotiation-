class StorageMini {
    constructor(capacity) {
        this.capacity = capacity;
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        this.capacity -= product.quantity;
    }
}

let storage = new StorageMini(20);
storage.addProduct({ name: 'Bread', quantity: 5 });
storage.addProduct({ name: 'Milk', quantity: 3 });
console.log(storage.capacity);
console.log(storage.products);

// • Constructor-ът получава capacity.
// • Създай this.products като празен масив.
// • addProduct(product) добавя продукта в масива.
// • При добавяне намалявай capacity с product.quantity.
// • Очакван capacity: 12.