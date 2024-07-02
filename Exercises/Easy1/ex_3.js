let rlSync = require('readline-sync');
let bill = rlSync.question('What is the bill? ');
let tip = rlSync.question('What is the tip percentage? ');
tip *= 0.01;
bill = Math.round(bill * 100) / 100;
console.log(bill);
console.log(tip);
console.log(`The tip is $${tip * bill}`);
console.log(`The total is $${bill + (tip * bill)}`)