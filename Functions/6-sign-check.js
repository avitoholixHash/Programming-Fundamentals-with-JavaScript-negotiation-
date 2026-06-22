function signCheck(numOne, numTwo, numThree) {
    function signChecker(num) {
        if (num < 0) {
            return 'Negative';
        } else {
            return 'Positive'
        }
    }
    let result = numOne * numTwo * numThree;
    console.log(signChecker(result));
}
signCheck(-5,
 1,
 1);