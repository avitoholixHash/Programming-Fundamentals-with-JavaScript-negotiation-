function activationKeys(input) {
    let activationKey = input.shift().split('');

    while (input[0] !== "Generate") {
        let line = input.shift();
        let commandLine = line.split('>>>');
        let subCommand = '';
        let startIndex = 0;
        let endIndex = 0;

        switch (commandLine[0]) {
            case 'Slice': 
                startIndex = Number(commandLine[1]);
                endIndex = Number(commandLine[2]);
                activationKey.splice(startIndex, endIndex - startIndex);
                console.log(activationKey.join(''));
                break;
            case 'Flip':
                subCommand = commandLine[1];
                startIndex = Number(commandLine[2]);
                endIndex = Number(commandLine[3])
                if (subCommand === 'Upper') {
                    let upperCase = activationKey.slice(startIndex, endIndex).join('').toUpperCase();
                    activationKey.splice(startIndex, endIndex - startIndex, ...upperCase);
                    console.log(activationKey.join(''));

                } else if (subCommand === 'Lower') {
                    let lowerCase = activationKey.slice(startIndex, endIndex).join('').toLowerCase();
                    activationKey.splice(startIndex, endIndex - startIndex, ...lowerCase);
                    console.log(activationKey.join(''));
                }
                break;
            case 'Contains':
                subCommand = commandLine[1];
                if (activationKey.includes(subCommand)) {
                    console.log(`${activationKey.join('')} contains ${subCommand}`);
                } else {
                    console.log('Substring not found!');

                }
        }

    }
    if (input[0] === 'Generate') {
        console.log(`Your activation key is: ${activationKey.join('')}`);
    }
}
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));
