function oddAndEvenSum(theNumber) {
    let arrNumbers = theNumber.toString().split('');
    let sumAdd = 0;
    let sumEven = 0;
    arrNumbers.forEach(element => {
        if (Number(element) % 2 === 0) {
            sumEven += Math.abs(element);
        } else if (Number(element) % 2 !== 0) {
            sumAdd += Math.abs(element);
        }
    });
    console.log(`Odd sum = ${sumAdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(3495892137259234);