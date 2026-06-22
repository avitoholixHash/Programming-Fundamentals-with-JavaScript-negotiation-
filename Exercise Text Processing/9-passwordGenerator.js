function passwordGenerator(array) {
    let concatString = array[0].concat(array[1]);
    let word = array.pop().toUpperCase();
    const vowels = ["a", "e", "i", "o", "u"];
    let password = '';
    let replacementIndex = 0;

    for (const char of concatString) {
        if (vowels.includes(char)) {
            password += word[replacementIndex];
            replacementIndex++;
            if (replacementIndex >= word.length) {
                replacementIndex = 0;
            }

        } else {
            password += char;
        }
    }
    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);

// Output
// Your generated password is sElbGtNgAvRtOhEGzzNpAvRlO
//                            sElbGtNgAvRtOhEGzzNpAvRlO