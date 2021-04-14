function factorial(n){
    if (n < 0 ) return undefined;
    let total =1;
    for (let i = n; i > 1; i--) {
        total = total * i;
    }
    return total;

}

console.log(factorial(5));