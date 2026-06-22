function searchForANumber(array, commands) {
    const takeCount = commands[0];
    const removeCount = commands[1];
    const searchNumber = commands[2];

    let workingArray = array.slice(0, takeCount);
    workingArray.splice(0, removeCount);

    let counter = 0;
    workingArray.forEach(element => {
        if (element === searchNumber) {
            counter++;
        }
    });

    console.log(`Number ${searchNumber} occurs ${counter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);