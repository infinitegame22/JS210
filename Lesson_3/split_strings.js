/*
Goal: intake a string and delimiter to split the string on. Output the split strings on separate lines
input: string, string delimiter
output: strings split on delimiter

Rules: only use [] and length

E:
splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world
Ex: iterates over the string cuts the commas to output three strings

splitString('hello');
// logs:
// ERROR: No delimiter
the error is triggered to note the lack of delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o
- delimiter is an empty string, strange it breaks on the character

splitString('hello', ';');
// logs:
// hello
- no semicolons appear in the input string, so original string is output

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
- why is there a blank line output? does this represent the empty space?

D:
input: two strings
intermediate: iterate over the strings and save the new strings into a variable
output: variable(s) that are strings

A:
- if the parameter delimiter is `undefined` need to return an error message
- declare a variable that keeps track of the characters to output when a delimiter is found
- each time the variable is logged, clear it to empty
- log the variable at the end of the string no matter what.



 */


function splitString(string, delimiter) {
    if (delimiter === undefined) {
        return "ERROR: No delimiter"
    }

    let builtString = ''

    for (let index = 0; index < string.length; index++) {
        if (string[index] === delimiter) {
            console.log(builtString);
            builtString = '';
        } else if (delimiter === '') {
            console.log(string[index]);
        } else {
            builtString += string[index];
        }
    }
    return builtString;
}

console.log(splitString('abc,123,hello world', ','));
// logs:
// abc
// 123
// hello world

console.log(splitString('hello'));
// logs:
// ERROR: No delimiter

console.log(splitString('hello', ''));
// // logs:
// // h
// // e
// // l
// // l
// // o
//
console.log(splitString('hello', ';'));
// // logs:
// // hello
//
// splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello
