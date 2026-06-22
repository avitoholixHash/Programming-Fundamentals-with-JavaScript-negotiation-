function groupNames(input) {

    let list = {};

    for (const line of input) {
        let [city, name] = line.split(' -> ');

        if(!list[city]){
            list[city] = [];
                
        }
        list[city].push(name);
    }
    for (const key of Object.keys(list)) {
        console.log(`${key}: ${list[key].join(', ')}`);
    }
 
    
}

groupNames([
    'Sofia -> Ivan',
    'Plovdiv -> Maria',
    'Sofia -> Peter',
    'Varna -> Darsy'
]);
    // • Групирай имената по град.
    // • Използвай обект, в който ключът е градът.
    // • Ако градът още не съществува, създай празен масив.
    // • Принтирай: Sofia: Ivan, Peter.