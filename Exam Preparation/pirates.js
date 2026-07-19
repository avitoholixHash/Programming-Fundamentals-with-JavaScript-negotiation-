function pirates(input) {
    const targetCities = {};

    while (input[0] !== 'Sail') {
        const [cityName, populationText, goldText] = input.shift().split('||');
        const population = Number(populationText);
        const gold = Number(goldText);

        if (!targetCities[cityName]) {
            targetCities[cityName] = {
                population: 0,
                gold: 0,
            };
        }

        // If the city appears again, we add to the existing values.
        targetCities[cityName].population += population;
        targetCities[cityName].gold += gold;
    }

    input.shift(); // Remove "Sail"

    while (input[0] !== 'End') {
        const [command, town, firstValue, secondValue] = input.shift().split('=>');

        if (command === 'Plunder') {
            const people = Number(firstValue);
            const gold = Number(secondValue);

            targetCities[town].population -= people;
            targetCities[town].gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (targetCities[town].population === 0 || targetCities[town].gold === 0) {
                delete targetCities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            const gold = Number(firstValue);

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
                continue;
            }

            targetCities[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${targetCities[town].gold} gold.`);
        }
    }

    const cities = Object.keys(targetCities);

    if (cities.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`);

        for (const cityName of cities) {
            const city = targetCities[cityName];
            console.log(`${cityName} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
        }
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