function sumFirstAndLast(input){
    let firstElement = Number(input.shift());
    let secondElement = Number(input.pop());
    let result = firstElement + secondElement;
    console.log(result);
}
sumFirstAndLast(['20', '30', '40']);