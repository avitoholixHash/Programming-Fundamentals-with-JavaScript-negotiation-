function repeatString(str, number){
    let repeatText = '';
    for(let i = 0; i < number;i++){
        repeatText += str;
    }
    console.log(repeatText);
}
repeatString("abc", 3);