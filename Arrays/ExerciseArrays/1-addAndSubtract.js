function addAndSubtract(inputArr) {
    let newArr = [];
    let sumOrg = 0;
    let sumMod = 0;

    for (let i = 0; i < inputArr.length; i++) {
        sumOrg += inputArr[i];

        if (inputArr[i] % 2 === 0) {
            newArr.push(inputArr[i] + i);
        } else {
            newArr.push(inputArr[i] - i);
        }

        sumMod += newArr[i];
    }
    console.log(newArr);
    console.log(sumOrg);
    console.log(sumMod);
}
addAndSubtract([-5, 11, 3, 0, 2]);