function movies(inputListOfMovies) {

    //List for movie information!
    let listInfo = [];

    //Get names of movies
    inputListOfMovies.forEach(element => {
        if (element.includes('addMovie')) {
            let nameOfMovie = element.split('addMovie ')[1];
            listInfo.push({ name: nameOfMovie });
        }


        //Add onDate if name of film includes
        if (element.includes(' onDate ')) {
            let curentLine = element.split(' onDate ');
            //[name, date] = element.split(' onDate ');
            let name = curentLine[0];
            let date = curentLine[1]
            for (let i = 0; i < listInfo.length; i++) {
                if (listInfo[i].name === name) {
                    listInfo[i].date = date;


                }
            }

        }

        //Add director if name of film includes
        if (element.includes(' directedBy ')) {
            let curentLine = element.split(' directedBy ');
            //[name, director] = element.split(' directedBy ');
            let name = curentLine[0];
            let director = curentLine[1];

            for (let j = 0; j < listInfo.length; j++) {
                if (listInfo[j].name === name) {
                    listInfo[j].director = director
                }
            }
        }

    });



    for (let movie of listInfo) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }


}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);