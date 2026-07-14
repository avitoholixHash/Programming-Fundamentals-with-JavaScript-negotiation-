function plantDiscovery(input) {
    const countPlants = input.shift();
    let curentPlants = input.splice(0, countPlants);
    //My plants
    let plants = {};
    for (const element of curentPlants) {

        let [name, rarity] = element.split('<->');
        rarity = Number(rarity);

        if (!plants[name]) {
            plants[name] = {
                'Rate': [],
                'Rarity': rarity,
                'Average Rating': 0,
            };
        }
        plants[name]['Rarity'] = rarity;
    }

    for (const line of input) {

        if (line === 'Exhibition') {
            break;
        }

        let [command, plantName, rate] = line.split(/: | - /);
        rate = Number(rate);

        if (!plants[plantName]) {
            console.log('error');
            continue;
        }

        if (command === 'Rate') {
            plants[plantName]['Rate'].push(rate);
        } else if (command === 'Update') {
            plants[plantName]['Rarity'] = rate;
        } else if (command === 'Reset') {
            plants[plantName]['Rate'] = [];
        }
    }

    for (const key of Object.keys(plants)) {

        let length = plants[key]['Rate'].length;
        let averageRate = 0;
        let sum = 0;

        for (const element of plants[key]['Rate']) {
            sum += element;
        }

        averageRate = sum / length;

        if (length === 0) {
            averageRate = 0;
        } else {
            averageRate = sum / length;
        }

        plants[key]['Average Rating'] = averageRate.toFixed(2);
    }

    console.log('Plants for the exhibition:');
    for (const key in plants) {
        console.log(`- ${key}; Rarity: ${plants[key]['Rarity']}; Rating: ${plants[key]['Average Rating']}`);
    }
}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    //"Rate: Oahuooo<->10",
    "Exhibition"]);

//     output
//     Plants for the exhibition:
// - Arnoldii; Rarity: 4; Rating: 0.00
// - Woodii; Rarity: 5; Rating: 7.50
//-Welwitschia; Rarity: 2; Rating: 7.00