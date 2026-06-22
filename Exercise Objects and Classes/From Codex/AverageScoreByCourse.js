function averageScoreByCourse(input) {
    let list = {};

    for (const line of input) {
        let [course, student, score] = line.split(' -> ');
        score = Number(score);

        if (!list[course]) {
            list[course] = {
                students: [],
                score: [],
                avarageScore: 0,
            };
        }

        list[course].students.push(student);
        list[course].score.push(score);
    }


    for (const key of Object.keys(list)) {
        let length = list[key].score.length;

        for (const element of list[key].score) {
             list[key].avarageScore += element;
             
        }
       list[key].avarageScore /= length;

    }

    for (const key of Object.keys(list)) {
        console.log(`${key}, ${list[key].students.join(', ')} ${list[key].avarageScore.toFixed(2)}.`);
        
    }

}

averageScoreByCourse([
    'JS Fundamentals -> Ivan -> 5.50',
    'HTML & CSS -> Maria -> 6.00',
    'JS Fundamentals -> Peter -> 4.50',
    'HTML & CSS -> Alex -> 5.00'
]);
// • Групирай студентите по курс.
// • За всеки курс пази students и scores.
// • Средната оценка се смята след като събереш всички scores.
// • Принтирай course, list of students и average.toFixed(2).