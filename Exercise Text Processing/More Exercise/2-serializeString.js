function serializeString(str) {

    const text = str.shift();
    const result = {};
    let index = 0;

    for (const char of text) {

        if (!result[char]) {
            result[char] = [];
        }
        result[char].push(index);

        index++;
    }
    //Print
    for (const [char, indexes] of Object.entries(result)) {
        console.log(`${char}:${indexes.join('/')}`);
    }
}
serializeString(["abababa"]);
// output
// a:0/2/4/6
// b:1/3/5