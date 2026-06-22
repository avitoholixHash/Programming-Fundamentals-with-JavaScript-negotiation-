function firstAndLastKNumbers(inputArr){
    let kNumber = inputArr.shift(0);

    let firstHalf = inputArr.slice(0,kNumber);
    let secondHalf = inputArr.slice(inputArr.length / kNumber, inputArr.length);
    console.log(firstHalf.join(' '));
    console.log(secondHalf.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);