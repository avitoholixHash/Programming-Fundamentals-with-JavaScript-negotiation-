function rightPlace(str, char, result){
    const newStr = str.replace('_',char);
    
    if(newStr === result){
        console.log('Matched');
        
    }else{
        console.log('Not Matched');
        
    }
    
}
rightPlace('Str_ng', 'i', 'String');