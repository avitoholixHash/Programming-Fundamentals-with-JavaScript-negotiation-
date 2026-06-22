// let songs = [
//     {
//         typeList: 'favourite',
//         name: 'DownTown',
//         time: '3:14'
//     },
//     {
//         typeList: 'rock',
//         name: 'Smooth Criminal',
//         time: '4:01'
//     }
// ];

class Song{
    constructor(typeList, name, time){
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}
let typeList = 'Favorite';
let name = 'DownTown';
let time = '67'
let songss = new Song(typeList, name, time);
let songs = [];
songs.push(songss);
for (const element of songs) {
    console.log(`Name of song ${element.name} time ${element.time} in your libery ${element.typeList}`);
    
}