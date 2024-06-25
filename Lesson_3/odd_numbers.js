/*
P: input: integer
output: log odd numbers

E:
logOddNumbers(19);

// output on console
1
3
5
7
9
11
13
15
17
19

D:
input: integer
intermediate: range or array of numbers from 0 to argument number
output: all odd numbers

A:
loop over the numbers from 1 to input number
output the current number if it's odd
 */


// function logOddNumbers(nums) {
//     for (let i = 1; i <= nums; i++) {
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }
//
// logOddNumbers(19);

//
// function logOddNumbers(nums) {
//     for (let i = 1; i <= nums; i+=2) {
//         console.log(i);
//     }
// }
//
// logOddNumbers(19);

function logOddNumbers(nums) {
    for (let i = 1; i <= nums; i++) {
        if (i % 2 == 0) {
            continue;
        } else
            console.log(i);
    }
}

logOddNumbers(19);