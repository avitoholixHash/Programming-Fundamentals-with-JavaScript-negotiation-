function specialNumbers(number) {
    let sum = 0;
    let str = '';

    for (let i = 1; i <= number; i++) {
        sum = 0;
        str = i.toString();
        for (let j = 0; j < str.length; j++) {
            sum += Number(str[j]);

        }
        let special = sum === 5 || sum === 7 || sum === 11;

        if (special) {
            console.log(`${i} -> True`);

        } else {
            console.log(`${i} -> False`);

        }

    }

}
specialNumbers(15);