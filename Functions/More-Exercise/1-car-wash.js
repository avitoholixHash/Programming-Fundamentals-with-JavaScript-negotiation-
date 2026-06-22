function carWash(inputArr) {

    let carCleaner = 0;

    let action = {
        'soap': (value) => { return value += 10 },
        'water': (value) => { return value * 1.2 },
        'vacuum cleaner': (value) => { return value * 1.25 },
        'mud': (value) => { return value * 0.9 }
    }

    for (const comand of inputArr) {
        carCleaner = action[comand](carCleaner);
    }

    console.log(`The car is ${carCleaner.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);