class Student {
    constructor(name){
        this.name = name;
        this.grades = [];
    }

    addGrade(grade){
        this.grades.push(grade);
    }

    getAverage(){
        let average = 0;
        for (const grade of this.grades) {
            average += grade;
        }
        average = average / this.grades.length;
        return average.toFixed(2);
    }
}

let student = new Student('Maria');
student.addGrade(5.50);
student.addGrade(6.00);
console.log(student.grades);
console.log(student.getAverage());

    // • Constructor-ът получава name.
    // • Създай this.grades като празен масив.
    // • addGrade(grade) добавя оценка в масива.
    // • getAverage() връща средната оценка като число.