function wordOccurrences(input) {
    let counterWord = new Map();

    for (const words of input) {

        if (!counterWord.has(words)) {
            counterWord.set(words, 0);
        }
        counterWord.set(words, counterWord.get(words) + 1);
    }

    let sorted = Array.from(counterWord.entries()).sort((a, b) => b[1] - a[1]);
    for (const [word, totalCounter] of sorted) {
        console.log(`${word} -> ${totalCounter} times`);
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
// otput
// sentence -> 3 times
// Here -> 2 times
// is -> 2 times
// the -> 2 times
// first -> 1 times
// another -> 1 times
// And -> 1 times
// finally -> 1 times
// third -> 1 times
