function mirrorWords(text) {
    const pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    const matches = [...text[0].matchAll(pattern)];
    const mirrorWords = [];

    if (matches.length > 0) {
        for (const match of matches) {
            let firstWord = match.groups.wordOne;
            let secoWord = match.groups.wordTwo;

            let reverseWord = secoWord.split('').reverse().join('');

            if (firstWord === reverseWord) {
                mirrorWords.push(`${firstWord} <=> ${secoWord}`);
            }
        }
        console.log(`${matches.length} word pairs found!`);

    } else {
        console.log('No word pairs found!');
    }

    if (mirrorWords.length > 0) {
        
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
    } else {
        console.log('No mirror words!');
    }
}
mirrorWords([
'@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]

);