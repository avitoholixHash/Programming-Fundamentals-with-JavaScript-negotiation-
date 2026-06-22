function cutAndReverse(string){
    let getText = string.split('').reverse();
    console.log(getText.slice(getText.length / 2, getText.length).join(''));
    console.log(getText.slice(0, getText.length / 2).join(''));
}
//Codex solution 
function cutAndReverse(string) {
    let middle = string.length / 2;

    let firstHalf = string.substring(0, middle);
    let secondHalf = string.substring(middle);

    let reversedFirst = firstHalf.split('').reverse().join('');
    let reversedSecond = secondHalf.split('').reverse().join('');

    console.log(reversedFirst);
    console.log(reversedSecond);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');