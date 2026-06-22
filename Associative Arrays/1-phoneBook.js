//Фокус: запис и презаписване на стойност по ключ

function phoneBook(input) {

    let myPhoneBook = {};

    for (const line of input) {
        // The destructuring syntax
        const [name, phoneNumber] = line.split(' ');
        
        if(!myPhoneBook[name]){
            myPhoneBook[name] = phoneNumber;
        }
        myPhoneBook[name] = phoneNumber;
    }
    console.log(JSON.stringify(myPhoneBook));
    // The destructuring syntax is a JavaScript syntax that makes it
    //  possible to unpack values from arrays, or properties from objects, into distinct variables.
    let {Peter, Maria} = myPhoneBook;
    console.log(Peter);
    // The Object.entries() static method returns an array of 
    // a given object's own enumerable string-keyed property key-value pairs.
    let arrPhoneBook = Object.entries(myPhoneBook);
    for (const kvp of Object.entries(myPhoneBook)) {
        let [name, phoneNumber] = kvp;//key-value pair!
        console.log(`Name: ${name} - Number: ${phoneNumber}`);
    }
    //Even shorten version
    for (const [name, phoneNumber] of Object.entries(myPhoneBook)) {
        console.log(`Name: ${name} -> Number: ${phoneNumber}`);
    }
    
    
}

phoneBook([
    'Peter 0888123456',
    'Maria 0888999000',
    'Peter 0888777666'
]);

// Името е ключ, телефонът е стойност.

// Ако името се повтори, новият телефон заменя стария.

// Принтирай: Peter -> 0888777666