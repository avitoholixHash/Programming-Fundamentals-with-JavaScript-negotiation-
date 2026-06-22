function maxNumber(arr) {

    let maxNuberArr = [];
    let isBiger = false;

    for (let i = 0; i < arr.length; i++) {

        isBiger = true;

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] <= arr[j]) {
                isBiger = false;
                break;
            }
        }
        if (isBiger) {
            maxNuberArr.push(arr[i]);
        }
    }
    console.log(maxNuberArr.join(' '));

}
maxNumber([1, 4, 3, 2]);