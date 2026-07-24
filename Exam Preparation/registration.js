function registration(input) {
    let userName = input.shift();

    while (input[0] !== 'Registration') {
        let [command, ...commandArgs] = input.shift().split(' ');

        switch (command) {
            case 'Letters': {
                const letterCase = commandArgs[0];

                if (letterCase === 'Lower') {
                    userName = userName.toLowerCase();
                } else {
                    userName = userName.toUpperCase();
                }
                console.log(userName);

            }
                break;
            case 'Reverse': {
                const startIndex = Number(commandArgs[0]);
                const endIndex = Number(commandArgs[1]);
                const validIndex = userName.length - 1;

                if (startIndex >= 0 && startIndex <= validIndex 
                    && endIndex <= validIndex && endIndex >= 0) {
                    let substring = userName.substring(startIndex, endIndex + 1);
                    substring = substring.split('').reverse().join('');
                    console.log(substring);
                }
            }
                break;

            case 'Substring': {
                const substring = commandArgs[0];
                if (userName.includes(substring)) {
                    userName = userName.replace(substring, '');
                    console.log(userName);
                } else {
                    console.log(`The username ${userName} doesn't contain ${substring}.`);
                }
            }
                break;

            case 'Replace': {
                const char = commandArgs[0];
                const dash = '-';

                userName = userName.split(char).join(dash);
                console.log(userName);

            }
                break;
            case 'IsValid': {
                const char = commandArgs[0];

                if (userName.includes(char)) {
                    console.log('Valid username.');
                } else {
                    console.log(`${char} must be contained in your username.`);

                }
            }
                break;
        }
    }
}
registration(['ThisIsSoftUni',
    'Reverse 1 3',
    'Replace S',
    'Substring hi',
    'Registration']);