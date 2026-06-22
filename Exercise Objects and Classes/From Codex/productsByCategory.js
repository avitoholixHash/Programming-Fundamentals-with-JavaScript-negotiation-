function productsByCategory(input) {
    let products = {};

    for (const line of input) {
        let [category, product] = line.split(': ');
        if (!products[category]) {
            products[category] = [];
        }
        products[category].push(product);
    }

    let sortedCategories = Object.keys(products).sort((a, b) => a.localeCompare(b));

    for (const category of sortedCategories) {
        console.log(`${category}: ${products[category].join(', ')}`);

    }

 


    // //products = {};
    // let ordered = Object.keys(products)
    //     .sort(
    //     (a, b) => a.localeCompare(b))
    //     .reduce(
    //     (obj, key) => {
    //         obj[key] = products[key];
    //         return obj;
    //     },
    //     {}
    // );
    // console.log(Object.keys(ordered));

}

productsByCategory([
    'Fruit: Apple',
    'Vegetable: Tomato',
    'Fruit: Banana',
    'Bakery: Bread',
    'Vegetable: Cucumber'
]);
// • Групирай продуктите по категория.
// • Ключът в обекта е категорията.
// • Стойността е масив от продукти.
// • Принтирай категориите по азбучен ред.