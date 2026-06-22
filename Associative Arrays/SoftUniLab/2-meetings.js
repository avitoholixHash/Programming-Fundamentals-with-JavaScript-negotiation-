function meetings(input) {

    const meetingsList = {};

    for (const lineInfo of input) {
        let [day, name] = lineInfo.split(' ');

        if (!meetingsList[day]) {
            meetingsList[day] = name;
            console.log(`Scheduled for ${day}`);

        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    // for (const key in meetingsList) {
    //     console.log(`${key} -> ${meetingsList[key]}`);
    // }

    for (const [day, name] of Object.entries(meetingsList)) {
        console.log(`${day} -> ${name}`);
        
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim', 'Wednesday Pesho']);