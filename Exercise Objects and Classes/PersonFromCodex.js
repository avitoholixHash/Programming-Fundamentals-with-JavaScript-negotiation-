class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let person = new Person('Peter', 20);
console.log(person.name);
console.log(person.age);

    // • Constructor-ът получава name и age.
    // • Запази ги като this.name и this.age.
    // • Очакван изход: Peter и 20.