function countingValleys(s) {
    let currentValley = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {

        if (s[i] === 'U') {
            currentValley++;
        }
        if (s[i] === 'D') {
            currentValley--;
        }

        if (currentValley == 0 && s[i] === 'U') {
            count++;
        }
    }

    return count;

}

console.log(countingValleys('UDDDUDUU'));