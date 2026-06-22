
let array = [1, 2, 4, 5, 6, 7, 9];
let sumArray = [];

for (let i = 0; i < array.length; i += 2) {
    let numOne = array[i];
    let numTwo = array[i + 1];

    if(isNaN(numTwo)){
        numTwo = 0;
    }
    
    let sum = numOne + numTwo;
    sumArray.push(sum);
    sum = 0;
}
array = [];
array = sumArray


console.log(array);
