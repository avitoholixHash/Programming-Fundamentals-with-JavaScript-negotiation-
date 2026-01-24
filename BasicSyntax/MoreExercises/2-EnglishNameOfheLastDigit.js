function NameOfTheLastDigit(num){
     const names = [
        'zero','one','two','three','four',
        'five','six','seven','eight','nine'
    ];

    const lastDigit = Math.abs(num) % 10;
    console.log(`${names[lastDigit]}`);
    
}
NameOfTheLastDigit(1234);