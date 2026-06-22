function integerAndFloat(a,b,c){
    const sum = a+b+c;
    let type = Number.isInteger(sum);
    if(!type){
        type = 'Float'
    }else{
        type = 'Integer'
    }

    console.log(`${sum} - ${type}`);
    
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303)