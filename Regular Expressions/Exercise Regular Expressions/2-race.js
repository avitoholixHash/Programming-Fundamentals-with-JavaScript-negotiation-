function race(input) {

    const participants = input.shift().split(', ');
    const raceList = {};

    const patternName = /[A-Za-z]+/mg;
    const patternDistance = /[0-9]/mg;

    for (const line of input) {
        if (line === 'end of race') {
            break;
        }

        let name = line.match(patternName).join('');
        const initialValue = 0;
        let distance = line.match(patternDistance).reduce((acc, curr) => Number(acc) + Number(curr), initialValue,);

        
        if (participants.includes(name)) {
            if (!raceList[name]) {
                raceList[name] = 0;
            }
            raceList[name] += distance;
        }
    }

    let result = Object.entries(raceList).sort((a, b) => b[1] - a[1]).slice(0,3);
    let index = 0;
    const places = ['1st', '2nd', '3rd'];
    for (const racer of result) {
        console.log(`${places[index]} place: ${racer[0]}`);
        index++;
    }
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    '123$$$',
    'end of race']);