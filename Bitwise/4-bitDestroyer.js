function bitDestroyer(num, bitPosition){
    let bit = [];

    while (num) {
        let leftover = num % 2;
        bit.unshift(leftover);
        num = Math.trunc(num / 2);
    }
    bit[bit.length - (bitPosition + 1)] = 0;
    console.log(bit.join(''));
    let getBitNum = bit.join('');
    let digit = parseInt(getBitNum, 2);
    console.log(digit);
    
    
}
bitDestroyer(1313, 5);