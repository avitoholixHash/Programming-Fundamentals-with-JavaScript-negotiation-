function academyRegister(input) {
    let register = {};

    for (const line of input) {
        let [studentInfoName, moduleInfo, gradeInfo] = line.split(', ');
        let student = studentInfoName.split('Student: ')[1];
        let module = moduleInfo.split('Module: ')[1];
        let grade = gradeInfo.split('Grade: ')[1];
        grade = Number(grade);

        if (grade >= 3) {
            if (!register[module]) {
                register[module] = {
                    student: [],
                    grade: [],
                    averageGrade: 0,
                }
            }
            register[module].student.push(student);
            register[module].grade.push(grade);
            register[module].averageGrade += grade;
        }


    }
    for (const key of Object.keys(register)) {
        let totalAverageGrade = 0;
        let length = register[key].grade.length;
        totalAverageGrade = register[key].averageGrade / length;
        register[key].averageGrade = totalAverageGrade.toFixed(2);
        console.log(`Module: ${key}, Students: ${register[key].student.join(', ')}, Average grade: ${totalAverageGrade.toFixed(2)}.`);
        
    }

    console.log(JSON.stringify(register));

}

academyRegister([
    'Student: George, Module: JS, Grade: 2.75',
    'Student: Alex, Module: HTML, Grade: 3.66',
    'Student: Boby, Module: JS, Grade: 4.20',
    'Student: Steven, Module: CSS, Grade: 4.90',
    'Student: Darsy, Module: HTML, Grade: 5.15'
]);
// • Игнорирай студентите с Grade < 3.
// • Групирай по Module.
// • За всеки Module пази students и grades.
// • Сметни average grade за всеки module.
// • Формат: Module: JS, Students: Boby, Average grade: 4.20.