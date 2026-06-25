function asciiSumator(input) {
    const chartCodeStart = input.shift().charCodeAt();
    const charCodeEnd = input.shift().charCodeAt();
    const text = Math.min(chartCodeStart, charCodeEnd);
    const end = Math.max(chartCodeStart, charCodeEnd);
    const string = input.shift();
    let sum = 0;

    for (const char of string) {
        const charCode = char.charCodeAt();

        if (charCode > text && charCode < end) {
            sum += charCode;
        }
    }
    console.log(sum);
}
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);
