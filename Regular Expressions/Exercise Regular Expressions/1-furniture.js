function furniture(input) {
    const pattern =
        />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/;

    const furnitureStore = {
        names: [],
        totalMoney: 0,
    };

    for (const line of input) {
        if (line === 'Purchase') {
            break;
        }

        const match = line.match(pattern);

        if (!match) {
            continue;
        }

        const { name, price, quantity } = match.groups;
        const currentTotal = Number(price) * Number(quantity);

        furnitureStore.names.push(name);
        furnitureStore.totalMoney += currentTotal;
    }

    console.log('Bought furniture:');

    for (const name of furnitureStore.names) {
        console.log(name);
    }

    console.log(
        `Total money spend: ${furnitureStore.totalMoney.toFixed(2)}`
    );
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);