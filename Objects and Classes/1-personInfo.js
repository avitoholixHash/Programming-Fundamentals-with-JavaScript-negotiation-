function personInfo(userName, userLastName, userAge) {
    let person = {
        firstName: userName,
        lastName: userLastName,
        age: userAge,
    }
    return person;
}
personInfo("Peter",
    "Pan",
    "20");