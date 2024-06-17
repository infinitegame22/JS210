let rlSync = require('readline-sync');
let firstNumber = Number(rlSync.question('==> Enter the first number: \n'));
let secondNumber = Number(rlSync.question('==> Enter the second number: \n'));
console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);