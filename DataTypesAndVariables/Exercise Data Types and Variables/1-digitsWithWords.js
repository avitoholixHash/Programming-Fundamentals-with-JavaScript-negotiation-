function digitsWithWords(digit) {
      let corectDigit;
  switch (digit) {
    case 'zero': corectDigit = 0; break;
    case 'one': corectDigit = 1; break;
    case 'two': corectDigit = 2; break;
    case 'three': corectDigit = 3; break;
    case 'four': corectDigit = 4; break;
    case 'five': corectDigit = 5; break;
    case 'six': corectDigit = 6; break;
    case 'seven': corectDigit = 7; break;
    case 'eight': corectDigit = 8; break;
    case 'nine': corectDigit = 9; break;
    default: corectDigit = 'unknown';
  }
  console.log(corectDigit);
  
}
digitsWithWords('one');