function hashTag(string) {
    let text = string.split(' ');

    for (const word of text) {
        if (word.startsWith('#') && word.length > 1) {
            let getWord = word.substring(1);
            if(/^[A-Za-z]+$/.test(getWord)){
                console.log(getWord);
            }
        }
    }
}
//hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');