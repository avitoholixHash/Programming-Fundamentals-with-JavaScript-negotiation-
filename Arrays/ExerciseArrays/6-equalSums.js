function equalSums(arr){
    let arrLength =  arr.length;
    for(let i = 0; i < arrLength; i++){
        let leftSum = 0;
        let rigthSum = 0;
        for(let left = 0;left < i; left++){
            leftSum += arr[left];
        }
        for(let rigth = i + 1; rigth < arrLength; rigth++){
            rigthSum += arr[rigth];
        }
        if(leftSum === rigthSum){
            console.log(i);
            return;
        }
    }
    console.log('no');
}
equalSums([1, 2, 3, 3]);