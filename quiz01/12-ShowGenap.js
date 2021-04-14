function showGenap(arr){
    const numbers = arr.split("");
    let out = ""
    for (let i = 0; i < numbers.length; i++) {
        if(parseInt(numbers[i]) % 2 ===0 ){
            out += numbers[i]+" ";
        }
    }
    return out;
}

console.log(showGenap("234567"));