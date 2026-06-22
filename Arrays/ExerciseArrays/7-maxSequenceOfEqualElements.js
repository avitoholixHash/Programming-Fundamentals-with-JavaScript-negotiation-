function maxSequenceOfEqualElements(arr) {
    let curentLen = 1;
    let curentStart = 0;

    let bestLen = 1;
    let bestStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            curentLen++
        } else {
            curentLen = 1;
            curentStart = i;
        }

        if (curentLen > bestLen) {
            bestLen = curentLen;
            bestStart = curentStart;
        }
    }
    let result = arr.slice(bestStart, bestStart + bestLen);
    console.log(result.join(' '));


}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);