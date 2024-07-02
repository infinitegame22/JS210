/*
Goal: intake a string and two integers
input: string, two ints
output: string

Rules:
- if both `start` and `end` are positive, `start` is less than `end`, and both are within the boundary of the string, return
 substr from the `start` index (inclusive) to the `end` index (NOT inclusive)
- if `start` is greater than `end` swap the values and return the substring as described above
- if `start` is equal to `end` return an empty string
- if `end` is omitted, the `end` variable inside the function is `undefined` return the substring at position `start`
up to and including teh end of the string
- if either `start` or `end` is less than 0 or NaN, reassign it to 0
- if either `start` or `end` is greater tha nthe length of the string, reassign it to the length of the string.

E:
let string = 'hello world';

substring(string, 2, 4);    // "ll"
indices 2-4
substring(string, 4, 2);    // "ll"
adjusted so it's indices 2-4
substring(string, 0, -1);   // ""
- empty string due to negative number
substring(string, 2);       // "llo world"
- starts from index 2 to end of string
substring(string, 'a');     // "hello world"
- returns whole string because start is changed to 0 and end is given so default is end of stirng
substring(string, 8, 20);   // "rld"
- starts at 8 and goes to end of string

D:
input: string, integer, integer
intermediate: rebuilt string with concatenation
output: string

A:
-
 */
function substring(string, start, end) {
    if (end === undefined) {
        end = string.length;
    }

    if (start < 0 || isNaN(start)) {
        start = 0;
    }

    if (end < 0 || isNaN(end)) {
        end = 0;
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    if (start > string.length) {
        start = string.length;
    }

    if (end > string.length) {
        end = string.length;
    }

    let newString = '';
    for (let index = start; index < end; index += 1) {
        newString += string[index];
    }

    return newString;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"