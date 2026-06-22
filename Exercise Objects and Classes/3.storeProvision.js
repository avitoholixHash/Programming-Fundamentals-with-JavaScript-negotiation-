function storeProvision(storArr, deliveryArr) {
    const storeProducts = {};

    for (let i = 0; i < storArr.length; i += 2) {
        let productName = storArr[i];
        let quantity = storArr[i + 1];
        quantity = Number(quantity);

        storeProducts[productName] = quantity;
    }

    for (let i = 0; i < deliveryArr.length; i += 2) {
        let productName = deliveryArr[i];
        let quantity = deliveryArr[i + 1]
        quantity = Number(quantity);

        if (!storeProducts.hasOwnProperty(productName)) {
            storeProducts[productName] = quantity;
            quantity = 0;
        }
        storeProducts[productName] += quantity;
    }

    for (const key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`);

    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);