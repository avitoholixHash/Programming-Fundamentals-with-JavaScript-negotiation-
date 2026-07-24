function pirates(input) {
    let targetCities = {};
    //Crew have targeted cities
    for (const element of input) {

        let line = input.shift();
        if (line === 'Sail') {
            break;
        }
        let [cityName, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);

        if (!targetCities[cityName]) {
            targetCities[cityName] = {
                population: 0,
                gold: 0,
            }
        } else {
            targetCities[cityName].population += population;
            targetCities[cityName].gold += gold;
        }
    }

    //Sail
    while (input[0] !== 'End') {
        let line = input.shift();
        let [command, town, ...arguments] = line.split('=>');

        switch (command) {
            case 'Plunder': {
                let cityTreasury = targetCities[town].gold;
                let citizen = targetCities[town].population;
                let gold = Number(arguments[1]);
                let people = Number(arguments[0]);

                if (cityTreasury - gold > 0 && citizen - people > 0) {
                    targetCities[town].population -= people;
                    targetCities[town].gold -= gold;
                    console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                } else {
                    console.log(`${town} has been wiped off the map!`);
                    delete targetCities[town];
                }
            }
                break;
            case 'Prosper': {
                let gold = Number(arguments[0]);
                if (gold < 0) {
                    console.log('Gold added cannot be a negative number!');
                    break;
                }
                targetCities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${targetCities[town].gold} gold.`);

            }
                break;

        }

    }
    let count = Object.keys(targetCities).length;
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
    for (const key in targetCities) {
        console.log(`${key} -> Population: ${targetCities[key].population} citizens, Gold: ${targetCities[key].gold} kg`);
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);