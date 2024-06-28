/*
goal: create a function that intakes a string and an integer and returns the string repeated the integer number of times
input: string, integer
output: string or undefined

Rules:
- ignore the possibility that times is not an integer
- if `times` is not an integer return `undefined`
- if `times` is a negative number return `undefined`
- if `times` is 0 return an empty string
- do not use anything from JS's string class

E:
repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined

D:
input: string, integer
intermediate: string to build
output: string

A:
- if `times` is not an integer or `times` is a negative number return `undefined`
- if `times` is 0 return an empty string
- declare an empty string to a variable to build a new string
- use the integer `times` argument to count the number of times the input string is concatenated to the new string variable
- return the new string
 */

function repeat(string, times) {
    if (typeof(times) !== "number" || times < 0) {
        return undefined;
    }

    if (times === 0) {
        return '';
    }

    let newString = '';
    for (; times > 0; times--) {
        newString += string;
    }
    return newString;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined