const n=5;
/* for (let i = 0; i < n; i++) {
    process.stdout.write("* ")   
}
for (let i = 0; i < n; i++) {
    process.stdout.write("*\n")   
} */

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        process.stdout.write("* ")  
    }
    process.stdout.write("\n")  
}