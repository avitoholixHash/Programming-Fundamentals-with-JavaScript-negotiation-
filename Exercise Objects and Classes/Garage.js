class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.cars = [];
        this.freeSpots = 0;
    }

    addCar(car){
        this.cars.push(car);
        this.freeSpots = this.capacity - this.cars.length;
    }

    getCars(){
        let print = [];
        for (const car of this.cars) {
            print.push(JSON.stringify(car));
        }
        return print.join('\n');
    }
}

let garage = new Garage(3);
garage.addCar({ brand: 'BMW', model: 'X5' });
garage.addCar({ brand: 'Audi', model: 'A4' });
console.log(garage.freeSpots);
console.log(garage.getCars());
    
    // • Constructor-ът получава capacity.
    // • Създай this.cars като празен масив.
    // • addCar(car) добавя car в масива и намалява freeSpots.
    // • getCars() връща всеки car като JSON string на нов ред.
    // • Внимавай return да е след цикъла, не вътре в него.