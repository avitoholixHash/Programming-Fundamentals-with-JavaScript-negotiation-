function bitAtPositionOne(num, bitPosition){
    let bit = [];
    
    while (num) {
        let leftover = num % 2;
        bit.unshift(leftover);
        num = Math.trunc(num / 2);
    }
    console.log(bit.join(''));
    let position = (num >> bitPosition) & 1;
    console.log(position);
    
}
bitAtPositionOne(2145, 5);
// Input	Output
// 2	1
// 51	1
// 13	0
// 24	0
