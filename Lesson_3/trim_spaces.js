/*
Goal: strip the blank whitespaces from the input string and return the adjusted string
input: string
output: string

Rules: only use [] and length

E:
trim('  abc  ');  // "abc"
    - spaces removed from both ends
trim('abc   ');   // "abc"
    - spaces removed from right end
trim(' ab c');    // "ab c"
    - spaces only removed from left end, not the middle
trim(' a b  c');  // "a b  c"
    - spaces only removed from left, not middle
trim('      ');   // ""
    - only spaces in input and returns an empty string
trim('');         // ""
    - empty string returns empty

D:
input: string
intermediate: array of characters?
output: string

A:
- if the opposite of the input is true (indicating empty string) return empty string
- declare a storage string
- declare a `copy` variable and set it to false.
- loop through each character of the string starting from the left.
    - if the char is a space and copy mode is `false` , perform the next iteration.
    - if the char is not a space set the copy mode to `true`
    - concatenate the char to the storage string.
    - next iteration
 */

// function trim(string) {
//     if (!string) {
//         return '';
//     }
//
//     let copy = false;
//     let spacelessString = '';
//
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === ' ' && copy === false) {
//             continue;
//         } else {
//             copy = true;
//             spacelessString += string[i];
//         }
//         console.log(spacelessString);
//     }
//     return spacelessString;
// }

function trim(string) {
    let trimmed = trimLeft(string);
    trimmed = trimRight(trimmed);

    return trimmed;
}

function trimLeft(string) {
    let newString = '';
    let copyMode = false;

    for (let index = 0; index < string.length; index += 1) {
        if (string[index] !== ' ') {
            copyMode = true;
        }

        if (copyMode) {
            newString += string[index];
        }
    }

    return newString;
}

function trimRight(string) {
    let newString = '';
    let copyMode = false;

    for (let index = string.length - 1; index >= 0; index -= 1) {
        if (string[index] !== ' ') {
            copyMode = true;
        }

        if (copyMode) {
            newString = string[index] + newString;
        }
    }

    return newString;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""