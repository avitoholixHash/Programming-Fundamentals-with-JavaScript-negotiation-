function test(arr){
    

    for(let i = 0; i < arr.length; i++){
        
        for(let j = 0; j < arr.length - 1; j++){
            
            if(arr[j] > arr[j + 1]){
                
                let temp = arr[j];//Времено пазим елемента
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
            }
        }
    }

    console.log(arr.join(' '));
}
    

test([5,4,2,3,1])