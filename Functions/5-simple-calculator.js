function simpleCalculator(numOne, numTwo, operator) {
    function multiply() {
        return numOne * numTwo;
    }

    function divide() {
        return numOne / numTwo;
    }

    function add() {
        return numOne + numTwo;
    }

    function subtract() {
        return numOne - numTwo;
    }

    const calc = {
        multiply: multiply(),
        divide: divide(),
        add: add(),
        subtract: subtract()
    }

    let result = calc[operator];

    console.log(result);

}
simpleCalculator(40,
8,
'divide');