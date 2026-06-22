function storage(input) {
    let warehouse = new Map();

    for (const lineInfo of input) {
        let [product, amount] = lineInfo.split(' ');
        amount = Number(amount);

        if (!warehouse.has(product)) {
            warehouse.set(product, amount);
        } else {
            let oldAmount = warehouse.get(product);
            warehouse.set(product, oldAmount + amount);
        }

        // if (!warehouse.has(product)) {
        //     warehouse.set(product, 0);
        // }

        // warehouse.set(product, warehouse.get(product) + amount);
    }

    for (const [product, amount] of warehouse) {
        console.log(`${product} -> ${amount}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);