function valueOfString(arrayInput) {
    const command = arrayInput.pop();
    const text = arrayInput.shift();

    function upperCase(str) {
        let sum = 0;
        for (const char of str) {
            if (char.match(/[A-Z]/)) {
                let charCode = char.charCodeAt();
                sum += charCode;
            }
        }
        return sum;
    }

    function lowerCase(str) {
        let sum = 0;
        for (const char of str) {
            if (char.match(/[a-z]/)) {
                let charCode = char.charCodeAt();
                sum += charCode;
            }
        }
        return sum;
    }

    const result = {
        'LOWERCASE': lowerCase(text),
        'UPPERCASE': upperCase(text),
    }

    console.log(`The total sum is: ${result[command]}`);

}
valueOfString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);
valueOfString(['AC/DC',
    'UPPERCASE'])