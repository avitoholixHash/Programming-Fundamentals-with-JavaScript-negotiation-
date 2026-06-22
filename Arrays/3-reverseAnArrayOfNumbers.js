function reverseAnArrayOfNumbers(number, arr) {
    const numberN = Number(number);
    const arrayInput = arr;
    let reverseArr = [];
    let print = [];
    for (let i = 0; i < numberN; i++) {  
        reverseArr.push(arrayInput[i]);
    }

    reverseArr.forEach((_, i) => {

        print.push(reverseArr.at(- 1 - i));

    });
    console.log(print.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);