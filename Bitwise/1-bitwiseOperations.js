function bitwiseOperations(number, numberForCount) {
    let counter = 0;
    let binNuber = [];
    while (number > 0) {
        let leftover = number % 2;
        binNuber.unshift(leftover);
        number = Math.trunc(number / 2);
        if(leftover == numberForCount){
            counter++;
        }

    }


    console.log(`Number 20 to binary = ${binNuber.join('')}`);
    console.log(counter);
    
    
}
bitwiseOperations(51, 0);