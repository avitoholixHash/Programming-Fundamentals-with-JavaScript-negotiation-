function pascalCaseSplitter(string) {
    let text = '';
    let flag = false;
    for (const char of string) {
        if (char.match(/^[A-Z]$/)) {
            if (flag) {
                text += ', ' + char;
            } else {
                text += char;
                flag = true;
            }
        } else {
            text += char;
        }
    }
    console.log(text);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

//Codex salution with Arrey!
// function pascalCaseSplitter(string) {
//     let words = [];
//     let currentWord = '';

//     for (let char of string) {
//         if (char.match(/[A-Z]/) && currentWord !== '') {
//             words.push(currentWord);
//             currentWord = char;
//         } else {
//             currentWord += char;
//         }
//     }

//     words.push(currentWord);

//     console.log(words.join(', '));
// }
// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');