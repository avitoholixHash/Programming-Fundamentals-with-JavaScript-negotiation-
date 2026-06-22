function palindromeIntegers(arrOfNumbers) {
    arrOfNumbers.forEach(element => {
        if (element.toString() === element.toString().split('').reverse().join('')) {
            console.log('true');
        } else {
            console.log('false');
        }
    });
}
palindromeIntegers([32, 2, 232, 1010]);