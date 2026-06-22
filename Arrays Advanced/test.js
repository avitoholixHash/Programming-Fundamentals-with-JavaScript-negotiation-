function test(string) {
    const result = string.split(' ').map(Number).map((el) => el += 1);
    console.log(result.join(' '));
    console.log('---------------');
}
test("1 2 3 4");

function evenNumber(string) {
    const evenNumbers = string.split(' ').map(Number).filter(el => el % 2 === 0);
    console.log(evenNumbers.join(' '));
    console.log('--------------');
}
evenNumber("1 2 3 4 5 6")

function average(string) {
    const makeArr = string.split(' ').map(Number);
    let sum = 0;
  
    for (let el of makeArr) {
        sum += el;
        
    }
    let averageNumber = sum / makeArr.length;

    const print = makeArr.filter(el => averageNumber < el);

    console.log(print.join(' '));

}
average("1 2 3 4 5")

