function secretChat(input) {
    let message = input.shift();

    while (input[0] !== 'Reveal') {
        let [command, ...commandArgs] = input.shift().split(':|:');
        switch (command) {
            case 'InsertSpace': {
                const index = Number(commandArgs[0]);
                message = message.slice(0, index) + (' ') + message.slice(index);
                console.log(message);
            }
                break;
            case 'Reverse': {
                const substring = commandArgs[0];
                if (message.includes(substring)) {
                    let reverseSubstring = substring.split('').reverse().join('');
                    message = message.replace(substring, '') + reverseSubstring;
                    console.log(message);

                } else {
                    console.log('error');

                }
            }
                break;
            case 'ChangeAll': {
                const lastSubstring = commandArgs[0];
                const newSubstring = commandArgs[1];

                message = message.split(lastSubstring).join(newSubstring);
                console.log(message);

            }
                break;
        }
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);



