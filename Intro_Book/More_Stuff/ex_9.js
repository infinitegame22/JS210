/*
input : value
output: boolean

Goal, return true if argument is -0
false other wise
 */

function solveNegZero(value) {
    return 1 / value === -Infinity;
}

console.log(solveNegZero(0));
console.log(solveNegZero(-0));