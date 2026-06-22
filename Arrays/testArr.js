function testArr(number, arr){
    let reverseArr = arr.slice(0,number).reverse();
    console.log(reverseArr.join(' '));

}
testArr(3, [10, 20, 30, 40, 50])
testArr(4, [-1, 20, 99, 5]);

function reverseInPlace(inputArr) {
    let reverseArr = [];
    reverseArr = inputArr.reverse();
    console.log(reverseArr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
