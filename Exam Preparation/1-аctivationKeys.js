function activationKeys(input) {
    let key = input.shift();
    let instructionLine = input.shift().split('>>>');


    while (instructionLine[0] !== "Generate") {
        const command = instructionLine.shift();

        switch (command) {
            case 'Slice': {
                const startIndex = Number(instructionLine[0]);
                const endIndex = Number(instructionLine[1]);
                // const substring = key.substring(startIndex, endIndex);
                // key = key.replace(substring, '');
                key = key.slice(0, startIndex) + key.slice(endIndex);
                console.log(key);
            }
                break;

            case 'Flip': {
                const casing = instructionLine[0];
                const startIndex = Number(instructionLine[1]);
                const endIndex = Number(instructionLine[2]);
                const substring = key.substring(startIndex, endIndex);
                const newSubstring = casing == 'Upper' ? substring.toUpperCase() : substring.toLowerCase();

                key = key.replace(substring, newSubstring);
                console.log(key);
            }
                break;

            case 'Contains': {
                const substring = instructionLine[0];

                if (key.includes(substring)) {
                    console.log(`${key} contains ${substring}`);
                } else {
                    console.log('Substring not found!');
                }
            }
                break;
        }
        instructionLine = input.shift().split('>>>');
    }

    console.log(`Your activation key is: ${key}`);
}
activationKeys((["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>rock",
    "Contains>>>uni-",
    "Contains>>>rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]));
