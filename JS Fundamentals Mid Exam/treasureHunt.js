function treasureHunt(input) {
    //Get treasure chest
    let treasureChest = input.shift().split('|');


    while (input.length) {
        //get command
        let commandLine = input.shift();
        if (commandLine === 'Yohoho!') {
            break;
        }

        let listOfItems = commandLine.split(' ');
        let command = listOfItems.shift();

        switch (command) {
            case 'Loot':
                let length = listOfItems.length;
                for (let i = 1; i <= length; i++) {
                    let curentItems = listOfItems.shift();

                    if (!treasureChest.includes(curentItems)) {
                        treasureChest.unshift(curentItems);
                    }

                }
                break;
            case 'Drop':
                let getIndex = Number(listOfItems.shift());
                if (getIndex < treasureChest.length && getIndex >= 0) {
                    let curentItem = treasureChest.splice(getIndex, 1);
                    treasureChest.push(curentItem[0]);
                }
                break;
            case 'Steal':
                let getIndexToEnd = Number(listOfItems.shift());
                let getIndexStart = treasureChest.length - getIndexToEnd;
                let stolen = [];
                if (getIndexStart <= 0) {
                    getIndexStart = 0;
                    stolen = treasureChest.splice(getIndexStart, getIndexToEnd);
                } else {
                    stolen = treasureChest.splice(getIndexStart, getIndexToEnd);
                }
                console.log(stolen.join(', '));
                break;
        }


    }

    //the sum of all treasure items
    let averageGain = 0;
    for (let element of treasureChest) {
        let lengthOfElements = element.length;
        averageGain += lengthOfElements;
    }

    if (treasureChest.length === 0) {
        console.log('Failed treasure hunt.');

    } else {
        averageGain = averageGain / treasureChest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
