function bombNumbers(array, bombNum) {

    const bomb = bombNum[0];
    const detonatedPower = bombNum[1];

    while (array.includes(bomb)) {

        let bombIndex = array.indexOf(bomb)
        let startIndex = bombIndex - detonatedPower;

        if (startIndex < 0) {
            startIndex = 0;
        }
        //Detonated!
        array.splice(startIndex, (detonatedPower * 2) + 1);

    }

    let sum = 0;

    array.forEach(element => {
        sum += element;
    });

    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9,], [4, 2]);
//Output 12 

// const cart = [5, 15, 25];
// let total = 0;
// const withTax = cart.map((cost) => {
//     total += cost;
//     return cost * 1.2;
// });
// console.log(withTax); // [6, 18, 30]
// console.log(total); // 45