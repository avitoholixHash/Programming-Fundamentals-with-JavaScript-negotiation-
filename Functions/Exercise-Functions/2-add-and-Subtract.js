function addAndSubtract(oneNum, twoNum, threeNum) {
    function sum(oneNum, twoNum) {
        return oneNum + twoNum;
    }
    function subtract(threeNum) {
        return sum(oneNum, twoNum) - threeNum;
    }
    console.log(subtract(threeNum));
}
addAndSubtract(23, 6, 10);