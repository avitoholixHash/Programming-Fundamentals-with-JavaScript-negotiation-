function schoolGrades(input) {

    const schoolGradesList = new Map();

    for (const student of input) {
        let [name, ...grades] = student.split(' ');
        grades = grades.map(Number)

        if (!schoolGradesList.has(name)) {
            schoolGradesList.set(name, grades);
        } else {
            let oldArrGrades = schoolGradesList.get(name);
            schoolGradesList.set(name, oldArrGrades.concat(grades));
        }
    }

    let sorted = Array.from(schoolGradesList.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of sorted) {
        let initialValue = 0;
        let length = grades.length;
        let sumOfGrades = grades.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue,
        );
        //малко по-краткко записване
        //let sumOfGrades = grades.reduce((acc, grade) => acc + grade, 0);
        let average = sumOfGrades / length;
        console.log(`${name}: ${average.toFixed(2)}`);

    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);

// output
// Lilly: 5.25
// Tammy: 3.00
// Tim: 5.75