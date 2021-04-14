function countWord(s){
    let count =0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] === " " || i===s.length-1){
            count++;
        }
        
    }
    return count;
} 

console.log(countWord("aku suka javascript"));