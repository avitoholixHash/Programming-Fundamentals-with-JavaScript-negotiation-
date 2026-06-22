function shoppingList(input) {
    let list = input.shift().split('!');

    while (input.length) {
        let [command, itemOne, itemTwo] = input.shift().split(' ');

        switch (command) {
            case 'Urgent':
                if (!list.includes(itemOne)) {
                    list.unshift(itemOne);
                }
                break;
            case 'Unnecessary':
                let getIndex = list.indexOf(itemOne);

                if (getIndex > -1) {
                    list.splice(getIndex, 1);
                }
                break;
            case 'Correct':
                if (list.includes(itemOne)) {
                    let getIndex = list.indexOf(itemOne);
                    list.splice(getIndex, 1, itemTwo);
                }
                break;
            case 'Rearrange':
                if (list.includes(itemOne)) {
                    let getIndex = list.indexOf(itemOne);
                    let getItemFromList = list.splice(getIndex, 1);
                    list.push(getItemFromList[0]);
                }
                break;
            case 'Go':
                console.log(list.join(', '));
                return;
        }
    }
}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Correct Chocolate Meet",
    "Go Shopping!"])
);