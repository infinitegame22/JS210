/*
input: two arguments (string, number, undefined or boolean)
output: boolean

Rules:
- both cannot be truthy
- both cannot be falsy
- EXACTLY ONE can be truthy in order to return true



 */

//
// function isXor(arg1, arg2) {
//     if (arg1 && arg2 || arg1 === arg2 || (!arg1 && !arg2)){
//         return false;
//     }
//
//     if ((!arg1 && arg2) || (arg1 && !arg2)) {
//         return true;
//     }
// }


function isXor(arg1, arg2) {
    return !!((!arg1 && arg2) || (arg1 && !arg2))
}


console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false

//
console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false