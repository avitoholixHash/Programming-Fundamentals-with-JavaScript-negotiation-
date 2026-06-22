function biggestOf3Numbers(first, second, last) {
    let biggestInteger = 0;
    if (first > biggestInteger) {
        biggestInteger = first;
    }
    if (second > biggestInteger) {
        biggestInteger = second;
    }
    if (last > biggestInteger) {
        biggestInteger = last;
    }
    console.log(biggestInteger);
}
biggestOf3Numbers(-2,
7,
3)