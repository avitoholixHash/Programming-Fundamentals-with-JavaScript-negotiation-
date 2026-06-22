function formatGrade(grade) {
    let print = '';
    if (grade < 3) {
        print = 'Fail';
    } else if (grade < 3.50) {
        print = 'Poor'
    } else if (grade < 4.50) {
        print = 'Good'
    } else if (grade < 5.50) {
        print = 'Very good'
    } else {
        print = 'Excellent'
    }
    if (grade < 3) {
        grade = 2;
        console.log(`${print} (${grade})`);
    } else {
        console.log(`${print} (${grade.toFixed(2)})`);
    }
}
formatGrade(2.99);