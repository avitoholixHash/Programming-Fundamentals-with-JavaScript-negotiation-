class Car {
    constructor(brand, model, fuel){
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss;
    }

    getInfo(){
        return `${this.brand} ${this.model} has ${this.fuel} fuel left.`;
    }
}

let car = new Car('BMW', 'X5', 80);
car.drive(25);
console.log(car.fuel);
console.log(car.getInfo());

    // • Constructor-ът получава brand, model и fuel.
    // • drive(fuelLoss) намалява fuel с fuelLoss.
    // • getInfo() връща текст: BMW X5 has 55 fuel left.
    // • Тук не печатай в метода, а return-ни текста.