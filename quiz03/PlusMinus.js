const s = "-4 3 -9 0 4 1";
const arr = s.split(",").map((el) => parseInt(el, 10));

function PlusMinus(n) {
    let positive = 0, negative = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero++;
        }
        else if (arr[i] > 0) {
            positive++;
        } else {
            negative++;
        }
    }
    console.log(positive / arr.length);
    console.log(negative / arr.length);
    console.log(zero / arr.length);
}

PlusMinus(arr)