function train(input) {

    let wagons = input.shift().split(' ').map(Number);
    const maxCapacityOfWadons = Number(input.shift());
    let command = '';
    let passengers = 0;

    while (input.length) {
        let curentValue = input.shift().split(' ');

        if (curentValue.length === 2) {
            command = curentValue.shift();
            passengers = curentValue.shift();
            passengers = Number(passengers);

            if (command === 'Add') {
                wagons.push(passengers);
            }
        } else {
            command = '';
            passengers = curentValue.shift();
            passengers = Number(passengers);

            for (let i = 0; i < wagons.length; i++) {
                if ((wagons[i] + passengers) <= maxCapacityOfWadons) {
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])
//output 72 54 21 12 4 75 23 10 0