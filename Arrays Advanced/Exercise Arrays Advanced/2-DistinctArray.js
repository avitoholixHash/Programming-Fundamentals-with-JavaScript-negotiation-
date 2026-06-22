function distinctArray(input){
    for(let i = 0; i < input.length; i++){
        let curent = input[i];
        for (let j = i + 1; j < input.length; j++) {
            if(curent === input[j]){
                input.splice(j,1);
                j--;
            }
        }
    }
    console.log(input.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
//output 7 8 9 2 3 4 1
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
//output 20 8 12 13 4 5
