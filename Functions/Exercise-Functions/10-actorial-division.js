function factorialDivision(numOne, numTwo) {

    let factorial = (num) => {
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    let result = factorial(numOne) / factorial(numTwo);
    console.log(result.toFixed(2));

}


function factorialDivision(numOne, numTwo) {
    let result = 1;
    let from = Math.min(numOne,numTwo);
    let to = Math.max(numOne, numTwo);
    
    for (let i = from + 1; i <= to; i++) {
        result *= i;
    }

    console.log(result.toFixed(2));
}
factorialDivision(6, 2);