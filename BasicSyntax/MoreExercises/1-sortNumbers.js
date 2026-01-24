function sortNumbers(a,b,c){
    let arr = [a,b,c];
    let sortArr = arr.toSorted((a,b)=> b - a);

    for(const elements of sortArr){
        console.log(elements);
    }
}
sortNumbers(1,3,2);