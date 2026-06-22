function censoredWords(text, words) {

    let simbol = '*';

    for (const ch of words){
        simbol += '*';
    }



    let result = text.replaceAll(words, simbol);

    console.log(result);

}
censoredWords('A small sentence with some words small', 'small');
//output A ***** sentence with some words