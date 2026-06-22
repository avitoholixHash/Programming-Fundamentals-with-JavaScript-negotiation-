function courseRegister(input) {
    let courseList = [];

    input.forEach(line => {

        if (line.includes('addStudent ')) {
            let name = line.split('addStudent ')[1];
            courseList.push({ name, });
        }

        if (line.includes(' grade ')) {
            let [name, grade] = line.split(' grade ');
            grade = Number(grade).toFixed(2);

            for (const student of courseList) {
                if (student.name === name) {
                    student.grade = grade;
                }
            }
        }

        if (line.startsWith('{')) {
            let obj = JSON.parse(line);
            let name = Object.keys(obj)[0];
            let course = obj[name];

            for (const student of courseList) {
                if (student.name === name) {
                    student.course = course;
                }
            }
        }

    });

    for (const student of courseList) {
        if (student.name && student.grade && student.course) {
            console.log(JSON.stringify(student));

        }
    }

}
//Input line if a JSON or not...
function isJSON(line) {
    try {
        JSON.parse(line);
        return true;
    } catch {
        return false;
    }
}

function isJSONObject(line) {
    try {
        let parsed = JSON.parse(line);
        return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed);
    } catch {
        return false;
    }
}


courseRegister([
    'addStudent Peter',
    'addStudent Maria',
    '{"Peter":"JS Fundamentals"}',
    '{"Maria":"HTML & CSS"}',
    '{"Peter":"JS Advanced"}',
    'Maria grade 5.80',
    'Peter grade 6.00'
]);
