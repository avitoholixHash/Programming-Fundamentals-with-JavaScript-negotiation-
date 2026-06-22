function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        // взимаме последните k елемента
        for (let j = i - 1; j >= Math.max(0, i - k); j--) {
            sum += result[j];
        }

        result.push(sum);
    }

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3);

//Output 1 1 2 4 7 13