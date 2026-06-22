function garage(input) {
    let garageList = {};

    for (const line of input) {
        let [garageNum, getInfoCar] = line.split(' - ');
              
            if (!garageList[garageNum]) {
                garageList[garageNum] = [];
            }

            garageList[garageNum].push(getInfoCar);

    }
    let sorted = Object.keys(garageList).sort((a,b) => a-b).map(Number);
    
    for (const key of sorted) {
        console.log(`Garage № ${key}`);
        printArr(garageList[key]);
    }

    function printArr(arr){
        arr.forEach(element => {
            console.log(`--- ${element.replaceAll(': ', ' - ')}`);
        });
    }
    
    
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

//     output
// Garage № 1
// --- color - blue, fuel type - diesel
// --- color - red, manufacture - Audi
// Garage № 2
// --- fuel type - petrol
// Garage № 4
// --- color - dark blue, fuel type - diesel, manufacture - Fiat    


