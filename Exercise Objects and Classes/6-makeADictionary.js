function makeADictionary(input) {
    let dictionary = [];

    input.forEach(line => {
        let text = JSON.parse(line);
        let term = Object.keys(text)[0];
        let definition = Object.values(text)[0];


        let found = false;
        for (let word of dictionary) {
            if (word.term === term) {
                word.definition = definition;
                found = true;
            }

        }

        if (!found) {
            dictionary.push({
                term,
                definition,
            });
        }

    });

    dictionary.sort((a, b) => a.term.localeCompare(b.term));

    for (let word of dictionary) {
        console.log(`Term: ${word.term} => Definition: ${word.definition}`);

    }


}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Coffee":"tropical shrub."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);