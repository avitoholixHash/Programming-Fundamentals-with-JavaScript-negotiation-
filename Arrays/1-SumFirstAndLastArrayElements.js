function sumFirstAndLastElements(input) {
    const lastDigit = input[input.length - 1];
    const firstDigit = input[0];
    const sum = firstDigit + lastDigit;
    console.log(sum);
}
sumFirstAndLastElements([10, 17, 22, 33]);