function worldTour(input) {
    let destination = input.shift();

    for (const line of input) {
        if (line === 'Travel') {
            break;
        }

        let [command, ...commandArgs] = line.split(':');
        if (command === 'Add Stop') {
            const index = Number(commandArgs[0]);
            const newDestination = commandArgs[1];

            if (index >= 0 && index < destination.length) {
                destination = destination.slice(0, index) + newDestination + destination.slice(index);
            }
             console.log(destination);
        }

        if (command === 'Remove Stop') {
            const startIndex = Number(commandArgs[0]);
            const endIndex = Number(commandArgs[1]);
            const lastIndex = destination.length - 1;

            if (startIndex <= lastIndex && startIndex >= 0
                && endIndex <= lastIndex && endIndex >= 0) {
                destination = destination.slice(0, startIndex) + destination.slice(endIndex + 1);
            }
            console.log(destination);
        }

        if (command === 'Switch') {
            const lastSubstring = commandArgs[0];
            const newSubstring = commandArgs[1];

            //destination = destination.replaceAll(lastSubstring, newSubstring);
            destination = destination.split(lastSubstring).join(newSubstring);
            console.log(destination);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]);    