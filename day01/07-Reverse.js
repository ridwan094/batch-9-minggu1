const s = "Javas";

/* for (let i = s.length-1; i >= 0; i--) {
    console.log(s[i]);
} */

function reverse(s){
    let r = ""
    for (let i = s.length-1; i >= 0; i--) {
        r = r + s[i]
    }
    return r;
}

console.log(reverse("code id"));