/*
Goal: intake a string and a start string and return a boolean that relates to the fact that the input string starts wit hthe search string.
input: two strings
output: boolean

Rules: only use [] and length
- the search string must include the first characters of the string to return true
- if the search string is an internal piece of the string it does not count as true in this function

E:
let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
- first word in the string is noted here
startsWith(str, 'We put');          // true
- first two wordss inthe string returns true as well
startsWith(str, '');                // true
- in this case the empty string is found at the beginning of the string

startsWith(str, 'put');             // false
- the string does not start with this word so returns false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
- longer string has an exclamation point so its length is longer than the str.

D:
input: 2 strings
intermediate:
output:boolean

A:
- if the length of the searchString is longer than the argument 1 return false
- if the first character of the search string does not match the first string of arg1 return false
- if the indices from 0 to the length of the searchstring match exactly to the same indices of argument 1 return true
- otherwise return false
 */

function startsWith(string, searchString) {
    if (searchString.length > string.length) {
        return false;
    }

}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // false
