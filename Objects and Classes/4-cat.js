function cat(arr) {

    class Cat {

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

        eat(){
            console.log(`${this.name} eat, am-am-am pryc!`);
            
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(' ');
        let cat = new Cat(name, age);
        cat.meow();
        cat.eat();

    }
}
cat(['Mellow 2', 'Tom 5']);