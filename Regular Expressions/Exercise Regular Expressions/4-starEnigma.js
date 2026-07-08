function starEnigma(inputMessage) {
    const messagesCount = inputMessage.shift();

    const patternForDecrypt = /[STARstar]/g;
    const pattern = /@(?<nameOfPlanet>[A-Za-z]+)[^@\-!:>]*:(?<population>[0-9]+)[^@\-!:>]*!(?<typeOfAttack>[AD])![^@\-!:>]*->(?<soldierCount>\d+)/;

    let decryptedMessages = '';

    let commandContainer = [];

    for (const message of inputMessage) {
        const matches = message.match(patternForDecrypt) || [];
        const decryptCode = matches.length;

        for (const char of message) {
            let currentChar = char.charCodeAt();
            decryptedMessages += String.fromCharCode(currentChar - decryptCode);

        }

        commandContainer.push(decryptedMessages);
        decryptedMessages = '';
    }

    const lastCommplanetsByAttackTypend = {
        A: [],
        D: [],
    };

    for (const command of commandContainer) {
        let commandMessage = pattern.exec(command);
        if (!commandMessage) {
            continue;
        }
        let { nameOfPlanet, population, typeOfAttack, soldierCount } = commandMessage.groups;

        lastCommplanetsByAttackTypend[typeOfAttack].push(nameOfPlanet);
    }

    lastCommplanetsByAttackTypend.A.sort((a, b) => a.localeCompare(b));
    lastCommplanetsByAttackTypend.D.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${lastCommplanetsByAttackTypend.A.length}`);
    for (const planet of lastCommplanetsByAttackTypend.A) {
        console.log(`-> ${planet}`);
    }
    console.log(`Destroyed planets: ${lastCommplanetsByAttackTypend.D.length}`);
    for (const planet of lastCommplanetsByAttackTypend.D) {
        console.log(`-> ${planet}`);
    }

}
// starEnigma(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']);

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);