function emojiDetector(inputText) {
    const patternForDigit = /[0-9]/gm;
    const patternForEmoji = /(:{2}|\*{2})([A-Z][a-z]{2,})\1/mg;

    let digits = inputText[0].match(patternForDigit) || [];

    //Cool Threshold
    digits = digits.map(a => Number(a));
    let coolThreshold = 1;

    for (const element of digits) {
        coolThreshold *= element;
    }

    //Get emoji
    let emojis = inputText[0].match(patternForEmoji) || [];
    let coolEmojis = [];

    const pattern = /([A-Za-z])/gm;

    for (const element of emojis) {
        let currentEmojiLetters = element.match(pattern);
        let emojiCoolness = 0;
        for (const char of currentEmojiLetters) {
            emojiCoolness += char.charCodeAt();
        }
        if (emojiCoolness >= coolThreshold) {
            coolEmojis.push(element);
        }
    }

    //Print
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    for (const element of coolEmojis) {
        console.log(`${element}`);

    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);