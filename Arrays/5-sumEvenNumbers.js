function sumEvenNumbers(inputArr) {
    let convertArr = [];
    let sum = 0;
    let lengthArr = inputArr.length;
    for (let i = 0; i < lengthArr; i++) {
        convertArr.push(Number(inputArr[i]));
        if (convertArr[i] % 2 === 0) {
            sum += convertArr[i];
        }
    }
    console.log(sum);
}
sumEvenNumbers(['3', '5', '7', '9']);