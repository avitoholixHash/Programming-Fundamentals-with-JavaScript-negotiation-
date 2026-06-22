function addAndRemove(inputArr) {
    let arrNumbers = [];
    let addValue = 0;
    for (let i = 0; i < inputArr.length; i++) {
        addValue++;
        switch (inputArr[i]) {
            case 'add':
                arrNumbers.push(addValue);
                break;
            case 'remove':
                arrNumbers.pop();
                break;
        }
    }
    if (arrNumbers.length === 0) {
        arrNumbers.push('Empty');
    }
    console.log(arrNumbers.join(' '));
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);