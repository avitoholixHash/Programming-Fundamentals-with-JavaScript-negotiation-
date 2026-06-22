function nxnMatrix(sizeOfMatrix) {
    let arr = [];

    const rowGenerator = () => {
        let output = '';
        for (let col = 0; col < sizeOfMatrix; col++) {
            output += `${sizeOfMatrix} `;
        }
        return output;
    }

    for (let row = 0; row < sizeOfMatrix; row++) {
        arr.push(rowGenerator());
    }
    console.log(arr.join('\n'));
}
nxnMatrix(3);