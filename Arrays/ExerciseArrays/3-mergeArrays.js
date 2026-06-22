function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    let sum = 0;
    let conCat = '';
    for (let i = 0; i < firstArr.length; i++) {

        if (i % 2 === 0) {
            sum = Number(firstArr[i]) + Number(secondArr[i]);
            thirdArr.push(sum);
        } else {
            conCat = firstArr[i] + secondArr[i];
            thirdArr.push(conCat);
        }
    }
    console.log(thirdArr.join(' - '));
}
mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);