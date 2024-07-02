/*
Goal: intake a string with a start integer and a length integer and output a substring that is the size indicated by the strat and length.
input: string, start int, length int
output: string

Rules:
- start arg is starting index. If the integer is less than 0, treat it as the length of the string minus the integer
- length argument represents the max length of output. If this number exceeds the length of the input string return the entire input string
- use [] or length
- if the length of the substring is 0, return an empty string
- if the difference between the length and size of the string is a negative number return empty string
E:

let string = 'hello world';

substr(string, 2, 4);      // "llo "
- starts at 2nd index and is 4 characters long
substr(string, -3, 2);     // "rl"
- length of "hello world" is 11.  11-3 = 8. The 8th index is "r"
substr(string, 8, 20);     // "rld"
- starts at 8 and goes to the end
substr(string, 0, -20);    // ""
- if the difference between the length and size of the string is a negative number return 0
substr(string, 0, 0);      // ""

D:
input: string, 2 ints
intermediate: build a new string from the pieces
output: string

A:
- if substring length is less than or equal to 0 then return an empty stirng
- if start is less than 0 reassign it to the length of the string - the opposite of the negative number
- if length is greater than the strings length minus start, adjust the length to be strings' length minus start
- declare a variable builtString to concatenate letters to
- starting at the start index iterate over the string and add each letter to the builtString up until the length wanted
- return builtString

scra
 */

function substr(string, start, length) {
    if (start < 0) {
        start = string.length + start;
    }

    let builtString = '';
    for (let counter = 0; counter < length; counter++) {
        let i = start + counter;

        if (string[i] === undefined) {
            break;
        }
        builtString += string[i];
    }

    return builtString;
}

let string = 'hello world';
//
console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""