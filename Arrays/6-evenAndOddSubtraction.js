function evenAndOddSubtraction(inputArr) {
    let oddSum = 0;
    let evenSum = 0;
    let diference = 0;

    inputArr.forEach((_, i) => {
        if (inputArr[i] % 2 === 0) {
            oddSum += inputArr[i]
        } else {
            evenSum += inputArr[i]
        }
    });
    diference = (oddSum - evenSum);
    console.log(diference);
}
    evenAndOddSubtraction([3,5,7,9])