function passedExamsRegister(input) {

    let examList = {};

    for (const lineInfo of input) {

        let [nameInfo, examInfo, scoreInfo] = lineInfo.split(', ');
        let score = scoreInfo.split('Score: ')[1];
        let name = nameInfo.split('Name: ')[1];
        let exam = examInfo.split('Exam: ')[1];
        score = Number(score);

        if (score >= 3) {
            if (!examList[exam]) {
                examList[exam] = {
                    students: [],
                    scores: [],
                    averageScore: 0,
                }
            }

            examList[exam].students.push(name);
            examList[exam].scores.push(score);
            examList[exam].averageScore += score;
        }
    }

    for (const key of Object.keys(examList)) {
        let length = examList[key].scores.length;
        examList[key].averageScore /= length;
        console.log(`Exam: ${key}, Students: ${examList[key].students.join(', ')}, Average score: ${examList[key].averageScore.toFixed(2)}`);
    }

    //console.log(JSON.stringify(examList));
    
}



passedExamsRegister([
    'Name: Ivan, Exam: JS, Score: 5.50',
    'Name: Maria, Exam: HTML, Score: 2.80',
    'Name: Peter, Exam: JS, Score: 4.20',
    'Name: Alex, Exam: HTML, Score: 3.60'
]);
// • Добавяй само записи със Score >= 3.
// • Групирай по Exam.
// • За всеки Exam пази names и scores.
// • Принтирай изпита, миналите студенти и средния score.