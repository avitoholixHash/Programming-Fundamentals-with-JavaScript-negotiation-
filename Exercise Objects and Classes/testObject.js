// let movie = {
//     name: 'Godfather'
// };

// movie.director = 'Francis Ford Coppola';
// movie.date = '29.07.2018';


// let element = [{ name: 'Godfather', director: 'Francis Ford Coppola', date: '29.07.2018' }]

// console.log(element[0].name);

// for (element of element) {

//     if (element.name && element.date && element.director) {
//         console.log(JSON.stringify(element));
//     }

// }

// function students(inputList) {
//     let listOfStudents = [];

//     inputList.forEach(lineInfo => {

//         if (lineInfo.includes('addStudent ')) {
//             let name = lineInfo.split('addStudent ')[1];
//             listOfStudents.push({ name: name });
//         }

//         if (lineInfo.includes(' age ')) {
//             let [name, age] = lineInfo.split(' age ');
//             for (let element of listOfStudents) {
//                 if (element.name === name) {
//                     element.age = age;
//                 }
//             }

//         }

//         if (lineInfo.includes(' grade ')) {
//             let [name, grade] = lineInfo.split(' grade ');
//             for (let element of listOfStudents) {
//                 if (element.name === name) {
//                     element.grade = grade;
//                 }
//             }

//         }
//     });

//     for(let element of listOfStudents){
//         if(element.name && element.age && element.grade){
//             console.log(JSON.stringify(element));
            
//         }
//     }
// }
// students([
//     'addStudent Ivan',
//     'addStudent Maria',
//     'Ivan grade 5.50',
//     'Maria age 18',
//     'Ivan age 19',
//     'Peter grade 6.00',
//     'Maria grade 5.80'
// ]);

// name
// age
// grade
let json = {"name": "Pesho"};

if(json.isJSON()){
    console.log('True');
    
}

