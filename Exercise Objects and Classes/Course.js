class Course {
    constructor(name){
        this.name = name;
        this.students = [];
    }

    addStudent(name, grade){
        this.students.push({
            name,
            grade,
        });
    }

    get averageGrade(){
        let average = 0;
        let length = this.students.length;
        for (const grade of this.students) {
            average += grade.grade;
        }
        return average = average / length;
    }
}

let course = new Course('JS Fundamentals');
course.addStudent('Ivan', 5.50);
course.addStudent('Maria', 6.00);
console.log(course.students);
console.log(course.averageGrade);

    // • Constructor-ът получава name.
    // • Създай this.students като празен масив.
    // • addStudent(name, grade) добавя обект { name, grade }.
    // • Направи getter averageGrade, който връща средната оценка.
    // • Делението трябва да е след като събереш всички оценки.