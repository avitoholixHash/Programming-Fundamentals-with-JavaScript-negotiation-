function passwordValidator(password) {

    function testLength(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function isOnlyLettersAndDigits(pass) {
        for (let char of pass) {
            if (!(/[a-zA-Z0-9]/.test(char))) {
                return false;
            }
        }
        return true;
    }

    function hasAtLeastTwoDigits(pass) {
        let counter = 0;
        for (let char of pass) {
            if (!isNaN(char)) {
                counter++;
            }
        }
        return counter >= 2;
    }

    let isValid = true;

    if (!testLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (!isOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}
passwordValidator('logIn12');