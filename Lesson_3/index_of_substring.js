/*
indexOf
input: two strings
output: index of first instance of this character or substring

Rules: no inbuilt String methods
only square brackets and length

E:
indexOf('Some strings', 's');                      // 5
input: 'Some strings', 's'
Output: 5
Ex:
S o m e ' ' s --> 5th index

indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf
input: two strings
output: index last occurrence of this character

Goal: access a character by index and use the length property to check the string length

E:

D:

A:
- return -1 if the second string is not a substring of the first argument
-
 */


function indexOf(firstString, secondString) {
    let index = 0;

    while(index < firstString.length) {
        console.log(firstString.charAt(index));
        index++;
    }
}

function lastIndexOf(firstString, secondString) {
    // statements
}

console.log(indexOf('Some strings', 's'));                      // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// indexOf('Blue Whale', 'Blute');                    // -1
// indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1