/*

input: integer
output: a series of strings to count up to the input integer
Rules:
- Assume that `nStars` is greater than 1 and less than 10.

E: input: 7
console output
1******
12*****
123****
1234***
12345**
123456*
1234567

input 2
output
1*
12
Ex: a looping over the integers from 1 to the argument building strings with asterisks until the end

D:
input: integer
intermediate: for loop to log the strings, array?
output: a series of strings to count up to the input integer

A:
- loop over the integers from 1 to the input integer
    - output `nStars` lines of `nStars` characters
    - if line number is `lineNumber`, then this line should have the digits from 1 to `lineNumber` followed by enough `*` to make the line a total length of `nStars` characters

 */
//
// function generatePattern(nStars) {
//     let row = '';
//     for (let lineNumber = 1; lineNumber <= nStars; lineNumber++) {
//         for (let numOfStars = nStars - 1; numOfStars >= 0; numOfStars--) {
//             console.log(`line Number: ${lineNumber}`);
//             console.log(`number of stars: ${numOfStars}`);
//         }
//         console.log(row);
//     }
// }
function generatePattern(nStars) {
    for (let lineNumber = 1; lineNumber <= nStars; lineNumber++) {
        let string = '';

        for (let digit = 1; digit <= lineNumber; digit++) {
            string += String(digit);
        }

        for (let count = lineNumber + 1; count <= nStars; count++) {
            string += '*';
        }

        console.log(string);
    }
}

console.log(generatePattern(7));


