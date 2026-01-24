function roundingNumbers(number, precision){
    
    if(precision > 15){
        precision = 15;
    }

    console.log(`${parseFloat(number.toFixed(precision))}`);
    
}
roundingNumbers(10.5,3);