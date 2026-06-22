class Box {
    constructor( width, height, depth){
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.volume = this.width * this.height * this.depth;
    }
}

let box = new Box(4, 5, 6);
console.log(box.volume);

// • Constructor - ът получава width, height и depth.
//     • Запази трите стойности в this.
//     • Добави this.volume = width * height * depth.
//     • Очакван резултат: 120.