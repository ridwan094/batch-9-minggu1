var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    var N = parseInt(readline());
    if (N % 2 == 1 || (N > 5 && N < 21)) {
        console.log("Weird");
    } else {
        console.log("Not Weird");
    }
}

for (let i = 0; i < 10; i++) {
    process.stdout.write(" "+i)
}

process.exit(0);


/* process.stdout.write("cool");
process.stdout.write("dombret ");
process.exit(0); */

/* let count = 0;
while(count < 10){
    rl.question("What is your favourite food: ",function(answer) {
        console.log('Oh, so your favorite food is ' + answer);
    });
    count ++;
} */

/* rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
}); */