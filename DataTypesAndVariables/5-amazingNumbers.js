function amazingNumbers(inputNumber) {

    let str = inputNumber.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    let sumToString = sum.toString();
    let result;
    for (let i = 0; i < sumToString.length; i++) {
        result = sumToString[i] === '9' ? 'True' : 'False';
        
    }
    console.log(`${inputNumber} Amazing? ${result}`);
}
amazingNumbers(1233);
amazingNumbers(999);