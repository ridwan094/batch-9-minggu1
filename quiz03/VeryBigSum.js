const s = "1000000001 1000000002 1000000003 1000000004 1000000005";
const arr = s.split(" ").map((el) => parseInt(el,10));

function VeryBigSum(n){
    let sum =0;
    for (let i = 0; i < n.length; i++) {
        sum = sum + n[i];
    }
    return sum;
}

console.log(VeryBigSum(arr));