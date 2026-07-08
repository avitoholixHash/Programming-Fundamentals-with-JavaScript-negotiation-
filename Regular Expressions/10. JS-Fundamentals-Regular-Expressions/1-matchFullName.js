function matchFullName(name){
    let userName = name.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g);
    console.log(userName.join(', '));
    
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");