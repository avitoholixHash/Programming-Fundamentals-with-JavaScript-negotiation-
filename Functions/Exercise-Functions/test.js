function isPalindrome(num){
    let original = num;
    let reversed = 0;

    while(num > 0){
        let lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

function palindromeIntegers(arr){
    arr.forEach(num => {
        console.log(isPalindrome(num));
    });
}

