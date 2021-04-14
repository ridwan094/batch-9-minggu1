const n = 5;

let tmp = n;
for (let index = 0; index < n; index++) {
    console.log(' '.repeat(--tmp) + '#'.repeat(index + 1));
}