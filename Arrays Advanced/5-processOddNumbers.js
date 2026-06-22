function processOddNumbers(inputArr) {
    let result = [];

    for (let i = 0; i < inputArr.length; i++) {

        if (!(i % 2 === 0)) {
            let sum = inputArr[i] * 2;
            result.unshift(sum);
        }
    }

    console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);