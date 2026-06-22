class Phone {
    constructor(model, battery){
        this.model = model;
        this.battery = battery;
    }

    useBattery(amount){
        this.battery -= amount;
    }

    charge(amount){
        this.battery += amount;
    }
}

let phone = new Phone('Samsung', 100);
phone.useBattery(25);
phone.charge(10);
console.log(phone.battery);

    // • Constructor-ът получава model и battery.
    // • useBattery(amount) намалява this.battery с amount.
    // • charge(amount) увеличава this.battery с amount.
    // • Очакван резултат: 85.