function listOfProducts(list) {

    list.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < list.length; i++) {

        console.log(`${i + 1}.${list[i]}`);

    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);