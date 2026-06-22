function reverseInPlace(inputArr) {
    let reverseArr = [];
    inputArr.forEach((_, i) => {
        reverseArr.push(inputArr.at(-1 - i));
    });
    console.log(reverseArr.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
