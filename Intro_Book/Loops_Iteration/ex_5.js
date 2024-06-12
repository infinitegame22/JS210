function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let result;
let tries = 0;
for (tries = 1; tries++;) {
    result = randomNumberBetween(1, 6);
    if (result >= 2) {
        break;
    }
}
// let result = randomNumberBetween(1, 6);
// tries += 1;
// console.log(`result: ${result}`);
// console.log(`tries: ${tries}`)
//
// while (result <= 2) {
//     result = randomNumberBetween(1, 6);
//     tries += 1;
// }

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');