function movingTarget(input) {

    let target = input.shift().split(' ').map(Number);

    while (input.length) {

        let [command, index, power] = input.shift().split(' ');
        index = Number(index);
        power = Number(power);

        switch (command) {
            case 'Shoot':
                //Shoot on target
                if (target.length > index && index >= 0) {
                    target[index] -= power;

                    if (target[index] <= 0) {
                        target.splice(index, 1);
                    }
                }
                break;

            case 'Add':
                if (target.length > index && index >= 0) {
                    target.splice(index, 0, power);
                } else {
                    console.log('Invalid placement!');
                }
                break;

            case 'Strike':
                if (target.length > index && index >= 0) {
                    
                    let start = index - power;
                    let end = (power * 2) + 1;

                    if (start >= 0 && end < target.length) {
                        target.splice(start, end);
                    } else {
                        console.log('Strike missed!');
                    }
                } 
                break;

            case 'End':
                console.log(target.join('|'));

                break;
        }

    }

}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"]);