function sumDigit(n) {
    
    let digit1 = 0, digit2 = 0, digit3 = 0, digit4 = 0, r = 0;

    digit4 = Math.floor(n / 1000);
    r = n % 1000;
    digit3 = Math.floor(r / 100);
    r = r % 100;
    digit2 = Math.floor(r / 10);
    digit1 = r % 10;

    return digit1 + digit2 + digit3 + digit4;
}

console.log(sumDigit(3456))