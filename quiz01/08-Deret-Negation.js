function negation(n){
    let out = ""
    let counter=0;
    for (let i = 1; i <= n; i++) {
            out += (i *-1)+","+i +","
        
    }
    return out;
}

console.log(negation(25))