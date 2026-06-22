function solvet(arr){

    class Song{
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = arr.shift();
    let wantedType = arr.pop();
    let songs = [];

    while(arr.length){
        let [type, song, time] = arr.shift().split('_');

        let curentSong = new Song(type, song, time);

        songs.push(curentSong);
        
        
    }

    for (let song of songs) {
        if (wantedType === 'all') {
            console.log(song.name);
        } else if (song.typeList === wantedType) {
            console.log(song.name);
        }
    }

}
// solvet([3,
// 'favourite_DownTown_3:14',
// 'favourite_Kiss_4:16',
// 'favourite_Smooth Criminal_4:01',
// 'favourite']);

solvet([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])