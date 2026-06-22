function stringSubstring(words, string){
    
    let word = words.toLowerCase();
    let text = string.toLowerCase();
    if(text.includes(word)){
        console.log(word);
        
    }else{
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language');
stringSubstring('python',
'JavaScript is the best programming language');