function maxWordLength(params) {
    let s = params.split(" ");
    let max = s[0].length;
    let out ="";
    for (let i = 0; i < s.length; i++) {
        if(s[i].length > max ){
            max = s[i].length;
            out = s[i];
        }
    }

    return out;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));