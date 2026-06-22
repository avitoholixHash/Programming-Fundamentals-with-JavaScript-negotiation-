function sortAnArrayBy2Criteria(input) {

    input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    });
    console.log(input.join('\n'));

}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma', 'cat', 'map']);
//output beta alpha gamma