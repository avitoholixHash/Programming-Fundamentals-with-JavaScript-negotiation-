function destinationMapper(input) {
    const pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
    const patternWord = /([A-Za-z]{2,})/g;
    let destination = input.match(pattern) || [];
    let travelPoints = 0;
    let destinationPrint = [];
    for (const line of destination) {
        let word = line.match(patternWord);
        travelPoints += word[0].length;
        destinationPrint.push(word[0]);
    }
    console.log(`Destinations: ${destinationPrint.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");