function armiesi(input) {

    const leaderList = {};

    for (const line of input) {

        if (line.endsWith(' arrives')) {
            let leader = line.replace(' arrives', '');
            leaderList[leader] = {};
        }

    }

    


    console.log(JSON.stringify(leaderList));

}
armiesi(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);

// output
// Porter: 58507
// >>> Legion - 55302
// >>> Retix - 3205
// Findlay: 39040
// >>> Britox - 39040