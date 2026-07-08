function softUniBarIncome(input) {
    const pattern = /%(?<name>[A-Za-z]+)%<(?<product>\w+)>\|(?<count>\d+)\|(?<price>\d+\.\d+)\$/;
    let totalIncome = 0;

    for (const line of input) {

        if (line === 'end of shift') {
            break;
        }

        let list = pattern.exec(line);

        if (!list) {
            continue;
        }

        const { name, product, count, price } = list.groups;

        totalIncome += Number(count) * Number(price);
        let totalPrice = count * price;
        console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);