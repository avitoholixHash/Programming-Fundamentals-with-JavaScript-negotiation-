function primeNumberChecker(digit) {
    let isPrime = true;

    if (digit <= 1) {
        isPrime = false;
        console.log(isPrime);
        return;
        
    }

    for (let i = 2; i < digit; i++) {
        if (digit % i === 0) {
            isPrime = false
            break;
        } 
    }

    console.log(isPrime);

}
primeNumberChecker(9);