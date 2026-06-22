function employees(arr) {

    listOfEmployees = {};

    arr.forEach(name => {
        let personalNum = name.length;
        listOfEmployees[name] = personalNum;
    });

    for (const key in listOfEmployees) {
        console.log(`Name: ${key} -- Personal Number: ${listOfEmployees[key]}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);