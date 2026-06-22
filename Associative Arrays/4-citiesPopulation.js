//Фокус: парсване на текст + сумиране
function citiesPopulation(input) {
    let citiesPopulation = {};

    for (const line of input) {
        let [cityName, population] = line.split(' <-> ');
        population = Number(population);
        if(!citiesPopulation[cityName]){
            citiesPopulation[cityName] = 0;
        }
        citiesPopulation[cityName] +=  population;
    }

    for (const key in citiesPopulation) {
        console.log(`${key} : ${citiesPopulation[key]}`);
    }

    
}

citiesPopulation([
    'Sofia <-> 1200000',
    'Plovdiv <-> 350000',
    'Sofia <-> 20000',
    'Varna <-> 330000'
]);
// • Градът е ключ.
// • Популацията се сумира, ако градът се повтори.
// • Принтирай: Sofia : 1220000.