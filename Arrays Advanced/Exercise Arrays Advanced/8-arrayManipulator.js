function arrayManipulator(array, commands) {
    while (commands.length) {
        let [command, ...params] = commands.shift().split(' ');

        switch (command) {
            case 'add': {
                let index = Number(params[0]);
                let element = Number(params[1]);
                array.splice(index, 0, element);
                break;
            }
            case 'addMany': {
                let index = Number(params[0]);
                let elements = params.slice(1).map(Number);
                array.splice(index, 0, ...elements);
                break;
            }
            case 'contains': {
                let element = Number(params[0]);
                console.log(array.indexOf(element));
                break;
            }
            case 'remove': {
                let index = Number(params[0]);
                array.splice(index, 1);
                break;
            }
            case 'shift': {
                let positions = Number(params[0]);
                let rotations = array.length > 0 ? positions % array.length : 0;

                for (let i = 0; i < rotations; i++) {
                    let current = array.shift();
                    array.push(current);
                }
                break;
            }
            case 'sumPairs': {
                let sumArray = [];

                for (let i = 0; i < array.length; i += 2) {
                    let numOne = array[i];
                    let numTwo = array[i + 1] ?? 0;
                    sumArray.push(numOne + numTwo);
                }

                array = sumArray;
                break;
            }
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                break;
        }

        if (command === 'print') {
            break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'addMany 2 7 8 9', 'remove 2', 'shift 2', 'sumPairs', 'print']);
