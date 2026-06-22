function products(input) {
    let listProducts = [];

    input.forEach(line => {
        if (line.includes('addProduct ')) {
            let name = line.split('addProduct ')[1];
            listProducts.push({ name });
        }

        if (line.includes(' price ')) {
            let [name, price] = line.split(' price ');
            for (let product of listProducts) {
                if (product.name === name) {
                    product.price = price;
                }
            }
        }

        if (line.includes(' quantity ')) {
            let [name, quantity] = line.split(' quantity ');
            for (let product of listProducts) {
                if (product.name === name) {
                    product.quantity = quantity;
                }
            }
        }
    });

    for (let product of listProducts) {
        if (product.name && product.price && product.quantity) {
            console.log(JSON.stringify(product));

        }
    }
}
products([
    'addProduct Bread',
    'addProduct Milk',
    'Bread price 2.50',
    'Milk quantity 3',
    'Bread quantity 5',
    'Cheese price 8.00',
    'Milk price 4.20'
]);
// name
// price
// quantity