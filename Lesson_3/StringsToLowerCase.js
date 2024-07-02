/*
Goal: intake a string and return it to its lower case version
input: string
output: lowercase string

Rules:
- only use [] and length

E:

toLowerCase('ALPHABET');    // "alphabet"
- input uppercase string, and output as lowercase, straightforward

toLowerCase('123');         // "123"
- integers are not able to be lowercased

toLowerCase('abcDEF');      // "abcdef"

D:
input: string
intermediate: iterate over string and store changed letters in a new string
output: string

A:
- declare a new variable to point to an empty string to builtString
- iterate over the input string
    - if the current character converted to ASCII value is between 65 and 90
        - declare a variable asciiNumeric and save its ascii value plus 32 to this variable
        - add the converted character to the builtString
    - otherwise add the character to the builtString
- return the builtString

Scratchpad:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

 */

function toLowerCase(string) {
    let builtString = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {
            let asciiNumeric = (string[i].charCodeAt(0)) + 32;
            let lowerChar = String.fromCharCode(asciiNumeric);
            builtString += lowerChar;
        } else {
            builtString += string[i];
        }
    }
    return builtString;
}


console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"