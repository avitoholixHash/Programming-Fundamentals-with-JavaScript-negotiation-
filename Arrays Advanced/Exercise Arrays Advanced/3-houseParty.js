function houseParty(input) {
    let list = [];

    while (input.length) {
        let curent = input.shift().split(' ');

        if (curent.length === 3) {

            if (list.includes(curent[0])) {

                console.log(`${curent[0]} is already in the list!`);
            } else {
                list.push(curent[0]);
            }

        } else if (curent.length === 4) {


            if (list.includes(curent[0])) {
                let getIndex = list.indexOf(curent[0]);
                list.splice(getIndex, 1);
                
            }else{
               console.log(`${curent[0]} is not in the list!`); 
            }

        }
    }
    console.log(list.join('\n'));

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
//output John is not in the list!
//Allie

// houseParty(['Tom is going!',
// 'Annie is going!',
// 'Tom is going!',
// 'Garry is going!',
// 'Jerry is going!']);
//output Tom is already in the list!
// Tom
// Annie
// Garry
// Jerry
