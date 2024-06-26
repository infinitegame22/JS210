/*
goal: intake two integers and return an integer that represents the greatest integer that can be used to divide the two inputs
input: two integers
output: integer

E:
input: 12, 4
Output: 4
Ex: multiples of 12: 1, 3, 4, 2, 6, 12
    multiples of 4: 1, 2, 4

D:
input: two integers
intermediate: iterate over a range of numbers from 1 to the integer
                -
output: integer

A:
- choose the smaller integer between the two inputs
- declare a variable to hold the max integer
- iterate over integers from 1 to the larger integer argument
    - if the current integer is divisible by both arguments with no remainder, reassign the max variable to current int
- return the max

 */

// function gcd(arg1, arg2) {
//     let min = Math.min(arg1, arg2);
//     let max_divisor = 0;
//     for (let i = 1; i <= min; i++) {
//         if (arg1 % i === 0 && arg2 % i === 0) {
//             max_divisor = i;
//         }
//     }
//     console.log(max_divisor);
// }

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function gcdMultiple(...array) {
    return array.reduce((acc, cur) => gcd(acc, cur));
}
//
// gcd(12, 4);   // 4
// gcd(15, 10);  // 5
// gcd(9, 2);    // 1


console.log(gcd(4, 12));   // 4
console.log(gcd(10, 15));  // 5
console.log(gcd(2, 9));    // 1
console.log(gcdMultiple(12, 4, 8)); // Output: 4
console.log(gcdMultiple(48, 18, 30)); // Output: 6