module.exports = function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest=0;
    let count=0;
    for(let i = 0; i < candles.length; i++){
        if(candles[i] > tallest){
            tallest = candles[i]
            count=1;
        }else if(candles[i] === tallest){
            count++;
        }
    }
    return count;

}

/* const candles="18 90 90 13 90 75 90 8 90 43";
candles.split(" ")
console.log(birthdayCakeCandles(candles)) */