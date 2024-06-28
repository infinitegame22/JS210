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
- declare a variable that stores the length of the shorter string
- iterate over the both strings
    - create an index for string 1
        - create an index for string 2
            - if the substring size is exactly 1
                - if the character at the current index1 is exactly the same as index2 return the index number
            - else use the shorter substring length to check the substring for matching
- return -1 if the second string is not a substring of the first argument
-
 */


function indexOf(firstString, secondString) {
    let substringSize = secondString.length;
    for (let index1 = 0; index1 < firstString.length; index1++) {
        for (let index2 = 0; index2 < secondString.length; index2++) {
            if (substringSize === 1) {
                if (firstString[index1] === secondString[index2]) {
                    return index1;
                }
            }
        }
    }
    return -1;
}

// function lastIndexOf(firstString, secondString) {
//     // statements
// }

console.log(indexOf('Some strings', 's'));                      // 5
// indexOf('Blue Whale', 'Whale');                    // 5
// indexOf('Blue Whale', 'Blute');                    // -1
// indexOf('Blue Whale', 'leB');                      // -1

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1