function condenseArrayToNumber(arr){
    while (arr.length > 1) {
        let condesed = [];
        for(let i = 0; i < arr.length - 1; i++){
            condesed.push(arr[i] + arr[i + 1]);
        }
        arr = condesed;
    }
    console.log(arr[0]);
    
}
condenseArrayToNumber([2,10,3]);