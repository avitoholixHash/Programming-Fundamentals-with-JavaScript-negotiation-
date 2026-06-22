function rotateArray(arr) {
    let getRotationNum = Number(arr.pop());
    for (let i = 0; i < getRotationNum; i++) {
        let curentValue = arr.pop();
        arr.unshift(curentValue);
    }
    console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])