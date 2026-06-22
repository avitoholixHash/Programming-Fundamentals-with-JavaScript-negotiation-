function orders(productsOrder, quantity) {
    const products = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00
    };
    let totalPrice = products[productsOrder] * quantity;
    console.log(totalPrice.toFixed(2));
}
orders("water", 5);   