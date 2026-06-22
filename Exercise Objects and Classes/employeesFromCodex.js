function employees(input) {

    let employeesList = [];

    input.forEach(line => {
        let [name, age, position] = line.split(' / ');
        age = Number(age);

        employeesList.push({
            name,
            age,
            position,
        });

    });
    //sorting by two criteria!!!
    employeesList.sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }

        return a.age - b.age;
    });

    for (let employee of employeesList) {
        console.log(`${employee.name} - ${employee.age} - ${employee.position}`);
    }

}

employees([
    'George / 35 / Developer',
    'Anna / 22 / Designer',
    'Peter / 22 / QA',
    'Maria / 30 / Manager'
]);
//{ name, age, position }