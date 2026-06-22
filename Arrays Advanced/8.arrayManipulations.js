function arrayManipulations(input) {

    let arr = input.shift().split(' ').map(Number);
    let command = '';
    let getNumber = 0;
    let getIndex = 0;

    for (let i = 0; i < input.length; i++) {
        let curent = input.shift().split(' ');
        command = curent.shift();
        getNumber = Number(curent.shift());
        getIndex = Number(curent.shift());

        switch (command) {
            case 'Add': arr.push(getNumber);
                break;
            case 'Remove': if (arr.includes(getNumber)) {
                let index = arr.lastIndexOf(getNumber);
                arr.splice(index, 1);
            }
                break;
            case 'RemoveAt': arr.splice(getNumber, 1);
                break;
            case 'Insert': arr.splice(getIndex, 0, getNumber);
                break;

        }
        i--;
    }

    console.log(arr.join(' '));

}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
//output -> 4 53 6 8 43 3

//Малко по-чисто решение (без i--):)...

function arrayManipulations(input) {

    let arr = input.shift().split(' ').map(Number);

    while (input.length > 0) {//Тука намаляме масива с всяка итерация!!!
        let [command, num1, num2] = input.shift().split(' ');//Destructuring assignment (деструктуриране)
        //Тук може и така let [command, ...params] = input.shift().split(' ');и params ще стане масив!
        //let [num1,num2] = params.map(Number);
        num1 = Number(num1);
        num2 = Number(num2);

        switch (command) {
            case 'Add':
                arr.push(num1);
                break;

            case 'Remove':
                let index = arr.indexOf(num1);//indexOf() - връща -1 ако го няма елемета и 1 ако го има!
                if (index !== -1) {
                    arr.splice(index, 1);
                }
                break;

            case 'RemoveAt':
                arr.splice(num1, 1);
                break;

            case 'Insert':
                arr.splice(num2, 0, num1);
                break;
        }
    }

    console.log(arr.join(' '));
}