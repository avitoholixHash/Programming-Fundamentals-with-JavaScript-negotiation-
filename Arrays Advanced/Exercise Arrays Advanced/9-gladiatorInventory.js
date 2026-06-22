function gladiatorInventory(input) {

    let inventory = input.shift().split(' ');

    while (input.length) {

        let [command, equipment] = input.shift().split(' ');

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    let getIndex = inventory.indexOf(equipment);
                    inventory.splice(getIndex, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let getIndex = inventory.indexOf(equipment);
                    let current = inventory.splice(getIndex, 1);
                    inventory.push(current[0]);
                }
                break;
            case 'Upgrade':
                let [object, upgrade] = equipment.split('-');
                if (inventory.includes(object)) {
                    let getIndex = inventory.indexOf(object);
                    let result = object + ':' + upgrade;
                    inventory.splice(getIndex + 1, 0, result);
                }
                break;
        }

    }
    console.log(inventory.join(' '));

}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);