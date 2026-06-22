class LaptopRepair {
    constructor(info, quality){
        this.info = info;
        this.quality = quality;
        this.isOn = false;

    }

    turnOn(){
        this.isOn = true;
        if(this.isOn){
            this.quality -= 1;
        }
    }

    turnOff(){
        this.isOn = false;
        if(!this.isOn){
            this.quality -= 1;
        }
    }

    showInfo(){
        return JSON.stringify(this.info);
    }

    get price(){
        return 800 - (this.info.age * 2) + (this.quality * 0,5);
    }


}

let info = { producer: 'Dell', age: 2, brand: 'XPS' };
let laptop = new LaptopRepair(info, 10);
laptop.turnOn();
laptop.turnOff();
console.log(laptop.quality);
console.log(laptop.price);
console.log(laptop.showInfo());

    // • Constructor-ът получава info и quality.
    // • isOn започва като false.
    // • turnOn() прави isOn true и намалява quality с 1.
    // • turnOff() прави isOn false и намалява quality с 1.
    // • showInfo() връща JSON.stringify(info).
    // • getter price връща 800 - age * 2 + quality * 0.5.