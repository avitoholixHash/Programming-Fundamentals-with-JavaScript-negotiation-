function employeesByDepartment(input) {

    let employeesList = {};

    for (const lineInfo of input) {
        let [departmentInfo, nameInfo, salaryInfo]= lineInfo.split(', ');
        let department = departmentInfo.split('Department: ')[1];
        let name = nameInfo.split('Name: ')[1];
        let salary = salaryInfo.split('Salary: ')[1];
        salary = Number(salary);

        if(!employeesList[department]){
            employeesList[department] = {
                employeesName: [],
                salary: [],
                averageSalary: 0,
            }
        }

        employeesList[department].employeesName.push(name);
        employeesList[department].salary.push(salary);
        employeesList[department].averageSalary += salary;
    }

    let departmentSort = Object.keys(employeesList).sort((a, b) => a.localeCompare(b));
    for (const key of departmentSort) {
        let length = employeesList[key].salary.length;
        let avarageSalary = employeesList[key].averageSalary /= length;
        console.log(`Department: ${key}, Name: ${employeesList[key].employeesName.join(', ')}, Average Salary: ${avarageSalary.toFixed(2) }`);
        
    }
    //console.log(JSON.stringify(employeesList));
    
}

employeesByDepartment([
    'Department: Sales, Name: Ivan, Salary: 1200',
    'Department: IT, Name: Maria, Salary: 2200',
    'Department: Sales, Name: Peter, Salary: 1500',
    'Department: IT, Name: Alex, Salary: 2000'
]);
// • Групирай по Department.
// • За всеки отдел пази employees и salaries.
// • Сметни средна заплата.
// • Принтирай отделите по азбучен ред.