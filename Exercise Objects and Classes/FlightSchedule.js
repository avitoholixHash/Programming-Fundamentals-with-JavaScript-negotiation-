function flightSchedule(input) {
    let allFlights = input[0];
    let newStatusOfFlight = input[1];
    let flightStatus = input[2][0];

    let infoFligth = [];

    for (const flight of allFlights) {
        let [fligthNumber, ...name] = flight.split(' ');
        let destination = name.join(' ');
        infoFligth.push({
            fligthNumber,
            destination,
            status: 'Ready to fly',
        });

    }

    for (const flight of newStatusOfFlight) {
        let [fligthNumber, status] = flight.split(' ');
        for (const fly of infoFligth) {

            if (fligthNumber === fly.fligthNumber) {
                fly.status = status;
            }

        }
    }

    if (flightStatus === 'Cancelled') {
        for (const fly of infoFligth) {
            if (flightStatus === 'Cancelled') {
                if (fly.status === 'Cancelled') {
                    console.log(`{ Destination: '${fly.destination}', Status: '${fly.status}' }`);
                }
            }
            if (flightStatus === 'Ready to fly') {
                if (fly.status === 'Ready to fly') {
                    console.log(`{ Destination: '${fly.destination}', Status: '${fly.status}' }`);

                }
            }
        }
    }
}    
    flightSchedule([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
    ]
    );