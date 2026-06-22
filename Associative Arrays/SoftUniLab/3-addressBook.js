function addressBook(input) {
    let myAddressBook = {};
    for (const lineInfo of input) {
        let [name, address] = lineInfo.split(':');
        if (!myAddressBook[name]) {
            myAddressBook[name] = address;
        }
        myAddressBook[name] = address;
    }
    
    let myAddressBookSortArr = Object.entries(myAddressBook);
    myAddressBookSortArr.sort((kvpA, kvpB) =>
        kvpA[0].localeCompare(kvpB[0]));

    myAddressBook = Object.fromEntries(myAddressBookSortArr);
    

    for (let [name, address] of Object.entries(myAddressBook)) {
        console.log(`${name} -> ${address}`);

    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']); 