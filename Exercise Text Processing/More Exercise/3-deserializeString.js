function deserializeString(input) {
    let result = [];
    let char = '';
    for (const element of input) {
        let line = element.split(':');
        if (line[0] === 'end') {
            break;
        }
        char = line.shift();
        let indexes = line.pop().split('/').map(a => Number(a));
        for (const  index of indexes) {
            result[index] = char;
        }
    }
    console.log(result.join(''));

}
// deserializeString(['a:0/2/4/6',
//     'b:1/3/5',
//     'end']);
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);