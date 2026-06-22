function players(input) {

    let playersList = [];

    input.forEach(line => {
        let text = JSON.parse(line);

        let name = Object.keys(text)[0];
        let point = text[name];

        let found = false;

        for (const player of playersList) {
            if (player.name === name) {
                player.point = point;
                found = true;
            }
        }

        if (!found) {
            playersList.push({
                name,
                point,
            });
        }
    });

    playersList.sort((a, b) => a.name.localeCompare(b.name));

    for (const player of playersList) {
        console.log(`${player.name}: ${player.point}`);

    }

}

players([
    '{"Peter":10}',
    '{"Maria":20}',
    '{"Peter":30}',
    '{"Ivan":15}',
    '{"Maria":25}'
]);
