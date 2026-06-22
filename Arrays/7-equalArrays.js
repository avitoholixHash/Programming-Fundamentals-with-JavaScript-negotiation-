function equalArrays(first, second) {
    let sum = 0;
    let ifEqual = true;
    for (let i = 0; i < first.length; i++) {

        if (first[i] !== second[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            ifEqual = false;
            break;
        }

        sum += Number(first[i]);

    }
    if (ifEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);

    }


}
equalArrays(['10', '20', '30'], ['10', '20', '30']);