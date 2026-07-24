function needForSpeed(input) {
    const garagePlaces = Number(input.shift());
    const garage = {};
    const myCar = input.splice(0, garagePlaces);

    for (const line of myCar) {
        const [car, mileage, fuel] = line.split('|');

        if (!garage[car]) {
            garage[car] = { 
                mileage: 0, 
                fuel: 0, 
            };
        }

        garage[car].mileage = Number(mileage);
        garage[car].fuel = Number(fuel);
    }

    while (input[0] !== 'Stop') {
        let [command, car, ...commandArgs] = input.shift().split(' : ');
        switch (command) {
            case 'Drive': {
                const distance = Number(commandArgs[0]);
                const fuel = Number(commandArgs[1]);

                if (garage[car].fuel >= fuel) {
                    garage[car].fuel -= fuel;
                    garage[car].mileage += distance;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                    if (garage[car].mileage >= 100000) {
                        console.log(`Time to sell the ${car}!`);
                        delete garage[car];
                    }
                } else {
                    console.log('Not enough fuel to make that ride');
                }
            }
                break;

            case 'Refuel': {
                const fuel = Number(commandArgs[0]);
                let currentLiters = garage[car].fuel;
                let addedFuel = 0;

                if (currentLiters + fuel > 75) {
                    garage[car].fuel = 75;
                    addedFuel = 75 - currentLiters;
                } else {
                    garage[car].fuel += fuel;
                    addedFuel = fuel;
                }
                console.log(`${car} refueled with ${addedFuel} liters`);

            }
                break

            case 'Revert': {
                const kilometers = Number(commandArgs[0]);
                let currentKilometers = garage[car].mileage -= kilometers;

                if (currentKilometers < 10000) {
                    garage[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                }
            }
                break;
        }
    }

    for (const car in garage) {
        console.log(`${car} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 100',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);