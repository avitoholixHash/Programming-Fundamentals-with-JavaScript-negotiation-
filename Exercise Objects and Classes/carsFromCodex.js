function cars(inputCarInfo) {
    let carList = [];

    inputCarInfo.forEach(line => {

        if (line.includes('addCar ')) {
            let name = line.split('addCar ')[1];
            carList.push({ name: name });
        }

        if (line.includes(' color ')) {
            let [name, color] = line.split(' color ');
            for (let element of carList) {
                if (element.name === name) {
                    element.color = color;
                }
            }
        }

        if (line.includes(' year ')) {
            let [name, year] = line.split(' year ');
            for (let element of carList) {
                if (element.name === name) {
                    element.year = year;
                }
            }

        }
    });

    for (let element of carList) {
        if (element.name && element.color && element.year) {
            console.log(JSON.stringify(element));

        }
    }
}
cars([
    'addCar BMW',
    'addCar Audi',
    'BMW color black',
    'Audi year 2020',
    'BMW year 2018',
    'Mercedes color white',
    'Audi color red'
]);

// model
// color
// year