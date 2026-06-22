function towns(arr) {
    // class Town{
    //     constructor(town, latitude, longitude){
    //         this.townName = town;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }

    // }
    const townList = {};
    
    arr.forEach(element => {
        let [town, latitude, longitude] = element.split(' | ')
        townList['town'] = town;
        townList['latitude'] = Number(latitude).toFixed(2);
        townList['longitude'] = Number(longitude).toFixed(2);
        console.log(townList);

        // let townList = new Town(
        //     town, 
        //     Number(latitude).toFixed(2), 
        //     Number(longitude).toFixed(2)
        // );
        // console.log(townList);
    });
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);