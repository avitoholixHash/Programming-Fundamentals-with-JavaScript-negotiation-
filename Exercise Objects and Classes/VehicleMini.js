class VehicleMini {
    constructor(type, parts){
        this.type = type;
        this.parts = parts;
        this.parts.quality = this.parts.engine * this.parts.power;
    }


}

let parts = { engine: 6, power: 100 };
let vehicle = new VehicleMini('car', parts);
console.log(vehicle.parts.quality);
   

    // • Constructor-ът получава type и parts.
    // • Запази parts в this.parts.
    // • Добави this.parts.quality = engine * power.
    // • Очакван quality: 600.