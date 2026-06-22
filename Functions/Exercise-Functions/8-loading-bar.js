function loadingBar(number){
    let procent = '%'.repeat(number/10);
    let dots = '.'.repeat(10 - (number / 10));
    if(number === 100){
        return console.log('100% Complete!');
    }
    console.log(`${number}% [${procent}${dots}]`);
    console.log('Still loading...');
}
loadingBar(50);