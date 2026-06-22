function replaceRepeatingChars(string) {
    //First Salution
    let myArray = string.split('');
    let unique = [...new Set(myArray)];
    let result = unique.join('');
    console.log(result); 

    // let unique = myArray.filter((value, index, array) => array.indexOf(value) === index);
    // console.log(unique);

    // let unique = '';
    // let current = 0;
    // let next = 1;
    // while (current < string.length) {
    //     if (string[current] !== string[next]) {
    //         unique += string[current];

    //     }
    //     current++;
    //     next++;
    // }
    // console.log(unique);

    // let unique = '';
    // for (let i = 0; i < string.length; i++) {
    //     if(string[i] !== string[i + 1]){
    //         unique += string[i];
    //     }
    // }
    // console.log(unique);
    
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');