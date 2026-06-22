//Фокус: сумиране на количества по продукт
function inventoryQuantity(input) {
    let inventory = {};
    for (const element of input) {
        let[product, quantity] = element.split(' ');
        quantity = Number(quantity);
        if(!inventory[product]){
            inventory[product] = 0;
        }
        inventory[product] += quantity;
    }
    for (const key of Object.keys(inventory)) {
        console.log(`${key} -> ${inventory[key]}`);
        
    }
}

inventoryQuantity([
    'Bread 5',
    'Milk 2',
    'Bread 3',
    'Cheese 1',
    'Milk 4'
]);
// • Продуктът е ключ.
// • Количество се натрупва с +=.
// • Принтирай продуктите в реда, в който са добавени като ключове.
// • Пример: Bread -> 8.