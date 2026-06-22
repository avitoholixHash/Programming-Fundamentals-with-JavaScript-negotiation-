function sorting(input) {

    input.sort((a, b) => a - b);
    let result = [];

    let start = 0;
    let end = input.length - 1;

    while (start <= end) {

        if (start !== end) {
            result.push(input[end]);
            result.push(input[start]);
        } else {
            result.push(input[start]);
        }
        start++;
        end--;
    }

    console.log(result.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 100]);
//output 94 1 69 2 63 3 52 18 31 21
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
//690 2 47 6 45 7 34 19 32 32

//Едно интересно решение

// function sorting(arr) {
//     arr.sort((a, b) => a - b);
//     let result = [];

//     while (arr.length) {
//         result.push(arr.pop());   // най-голямото
//         if (arr.length) {
//             result.push(arr.shift()); // най-малкото
//         }
//     }

//     console.log(result.join(' '));
// }