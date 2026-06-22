function manOWar(input) {

    //Get two ship
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);

    //Get maximum health capacitya section of the ship can reach. 
    const maxHealthCapacity = Number(input.shift());



    //Begin the battle
    while (input.length) {

        let [command, indexStart, indexEnd, damage] = input.shift().split(' ');
        indexStart = Number(indexStart);
        indexEnd = Number(indexEnd);
        damage = Number(damage);

        if (command === 'Retire') {
            break;
        }

        switch (command) {

            case 'Fire':

                if (indexStart < warShip.length && indexStart >= 0) {
                    warShip[indexStart] -= indexEnd;

                    if (warShip[indexStart] <= 0) {
                        return console.log('You won! The enemy ship has sunken.');
                    
                    }
                }
                break;

            case 'Defend':
                let length = pirateShip.length;
                if (indexStart < length && indexStart >= 0
                    && indexEnd < length && indexEnd >= 0) {

                    for (let i = indexStart; i <= indexEnd; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            return console.log('You lost! The pirate ship has sunken.');
                            
                        }

                    }

                }
                break;
                
            case 'Repair':

                if (indexStart < pirateShip.length && indexStart >= 0) {
                    pirateShip[indexStart] += indexEnd;

                    if (pirateShip[indexStart] > maxHealthCapacity) {
                        pirateShip[indexStart] = maxHealthCapacity;
                    }
                }
                break;

            //all sections of the pirate ship that need repair soon
            case 'Status':
                let getMinProcent = maxHealthCapacity * (20 / 100);
                let countSections = 0;

                for (element of pirateShip) {

                    if (element < getMinProcent) {
                        countSections++;
                    }
                }
                console.log(`${countSections} sections need repair.`);

                break;
        }
    }

    //Status on both ship
    let pirateShipStatus = 0;
    let warShipStatus = 0;

    for (element of pirateShip) {
        pirateShipStatus += element;
    }

    for (element of warShip) {
        warShipStatus += element;
    }

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);

console.log('----------->');
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]))