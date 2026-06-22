//Фокус: нормализиране с toLowerCase и броене
function oddOccurrences(text) {

    let textArr = text.split(' ').map(a => a.toLowerCase());

    const counter = {};
    let order = [];

    for (const element of textArr) {

        if (!counter[element]) {
            counter[element] = 0;
            order.push(element);
        }

        counter[element]++;
    }
    let printArr = [];

    for (const key of order) {

        if (counter[key] % 2 === 1) {
            printArr.push(key);
        }
    }
    console.log(printArr.join(' '));
    
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// • Раздели текста по интервал.
// • Брой думите case-insensitive: PHP, Php и php са една дума.
// • Принтирай само думите с нечетен брой срещания.
// • Запази реда на първа поява.