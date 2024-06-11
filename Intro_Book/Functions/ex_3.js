function multiply() {
    let readlineSync = require('readline-sync');
    let first = readlineSync.question('Enter the first number: ');
    let second = readlineSync.question('Enter the second number: ');
    console.log(`${first} * ${second} = ${first * second}`);
}

multiply();