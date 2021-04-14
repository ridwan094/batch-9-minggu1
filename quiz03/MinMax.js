function miniMaxSum(arrs) {
    let sum = [0, 0];
    arr = arr.sort((a, b) => { return a - b });
    for (let i = 0; i < 4; i++){
        sum[0] += arr[i];
        sum[1] += arr[arr.length - (i+1)];
    }

    console.log(sum[0], sum[1]);
} 

let numbers = '12345';
const arr = numbers.split("").map(
    el => parseInt(el, 10));
console.log(arr);
//miniMaxSum(1, 2, 3, 4, 5);