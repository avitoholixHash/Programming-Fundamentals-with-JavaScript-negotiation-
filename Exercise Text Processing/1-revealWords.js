function revealWords(words, string) {

    let getWords = words.split(', ');
    let text = string.split(' ');

    for (const element of getWords) {
        for (let i = 0; i < text.length; i++) {
            if (text[i].startsWith('*')) {
                if (element.length === text[i].length) {
                    text[i] = element;
                }
            }
        }
    }
    console.log(text.join(' '));

}
// revealWords('great',
//     'softuni is ***** place for learning new programming languages');

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')                