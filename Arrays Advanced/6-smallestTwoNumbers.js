function smallestTwoNumbers(inputArr){
    
    const sort = inputArr.sort((a,b) => a-b);
    console.log(sort.slice(0,2).join(' '));
    
}
smallestTwoNumbers([30, 15, 50, 5]);