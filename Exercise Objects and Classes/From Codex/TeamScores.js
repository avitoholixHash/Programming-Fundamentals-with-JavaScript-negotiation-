function teamScores(input) {

    let scores = {};

    for (const line of input) {
        let [name, score] = line.split(' -> ');
        score = Number(score);

        if (!scores[name]) {
            scores[name] = 0;
        }

        scores[name] += score;
    }

    for (let team of Object.keys(scores)) {
        console.log(`${team}: ${scores[team]} points.`);
    }

    // for (const key of Object.keys(scores)) {

    //     let arrFromScore = scores[key];
    //     let totalScore = 0;

    //     for (const element of arrFromScore) {
    //         totalScore += element;
    //     }

    //     scores[key].teamScores = totalScore
    //     console.log(`${key}: ${scores[key].teamScores} points.`);
    // }
}

teamScores([
    'Red -> 10',
    'Blue -> 5',
    'Red -> 7',
    'Green -> 12',
    'Blue -> 8'
]);
// • Групирай по team.
// • За всеки team пази totalScore.
// • При повторение не заменяй, а добавяй с +=.
// • Принтирай: Red: 17 points.