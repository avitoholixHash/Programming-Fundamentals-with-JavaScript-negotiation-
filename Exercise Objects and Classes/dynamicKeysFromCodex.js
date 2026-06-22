function dynamicKeys(input) {

    input.forEach(element => {
        let line = JSON.parse(element);
        let brand = Object.keys(line)[0];
        let model =  line[brand];
        console.log(`${brand} -> ${model}`);
        
    });
}

dynamicKeys([
    '{"brand":"BMW"}',
    '{"model":"X5"}',
    '{"year":"2020"}'
]);
//output
// brand -> BMW
// model -> X5
// year -> 2020