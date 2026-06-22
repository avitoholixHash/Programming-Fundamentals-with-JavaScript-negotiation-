function schoolRegister(input) {
    let register = [];

    for (const line of input) {
        let students = line.split(', ');

        let name = students.shift().split('Student name: ')[1];
        let grade = students.shift().split('Grade: ')[1];
        let score = students.shift().split('Graduated with an average score: ')[1];
        score = Number(score);

        if (score >= 3) {
            register.push({
                name,
                grade: Number(grade) + 1,
                score: score,
            });
        }

    }
    register.sort((a, b) => a.grade - b.grade);

    let grades = {};

    for (let student of register) {
        if (!grades[student.grade]) {
            grades[student.grade] = {
                students: [],
                scores: [],
            };
        }

        grades[student.grade].students.push(student.name);
        grades[student.grade].scores.push(student.score);

    }

    for (let key of Object.keys(grades)) {
        let value = grades[key].scores;
        let length = value.length;
        let average = 0;
        for (const element of value) {
            average += element;
        }

        grades[key].average = average / length;

    }

    for (const key of Object.keys(grades)) {
        console.log(`${key} Grade`);
        console.log(`List of students: ${grades[key].students.join(', ')}`);
        console.log(`Average annual score from last year: ${grades[key].average.toFixed(2)}`);
        console.log();
    }
    console.log(JSON.stringify(register));
    
}





schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Pesho, Grade: 9, Graduated with an average score: 4.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);