function printNthElement(inputArr) {
    let numberN = Number(inputArr.pop());
    let resultArr = [];
    for (let i = 0; i < inputArr.length; i += numberN) {
        resultArr.push(inputArr[i]);
    }
    console.log(resultArr.join(' '));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2']);