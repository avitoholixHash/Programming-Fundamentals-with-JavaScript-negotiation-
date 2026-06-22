//Фокус: броене с object
function wordOccurrences(input) {

    let objCounter = {};

    for (const element of input) {
        if(!objCounter[element]){
            objCounter[element] = 0;
        }
        objCounter[element]++;
    }

    for (const key of Object.keys(objCounter)) {
        console.log(`${key} -> ${objCounter[key]}`);
        
    }
}

wordOccurrences([
    'JS',
    'HTML',
    'JS',
    'CSS',
    'JS',
    'HTML'
]);
// • Всяка дума е ключ.
// • Стойността е броят срещания.
// • Ако думата я няма, започни от 0.
// • Принтирай: JS -> 3.