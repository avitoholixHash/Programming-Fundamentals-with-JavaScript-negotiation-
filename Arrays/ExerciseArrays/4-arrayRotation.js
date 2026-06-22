function arrayRotation(arr, num) {

    for (let i = 0; i < num; i++) {
        let cureentElement = arr.shift();
        arr.push(cureentElement);
    }
    console.log(arr.join(' '));

}
arrayRotation([2, 4, 15, 31], 5);