function smallestNumbers(oneNum, twoNum, threeNum) {
    let sortArrey = [oneNum, twoNum, threeNum];
    for (let i = 0; i < sortArrey.length; i++) {
        for (let j = 0; j < sortArrey.length - 1; j++) {
            let temp = 0;
            if (sortArrey[j] > sortArrey[j + 1]) {
                temp = sortArrey[j];
                sortArrey[j] = sortArrey[j + 1];
                sortArrey[j + 1] = temp;
            }
        }
    }
    let smallestNum = sortArrey[0];
    console.log(smallestNum);
}
smallestNumbers(2,
    5,
    3
);