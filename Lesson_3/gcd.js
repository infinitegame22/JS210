/*
goal: intake two integers and return an integer that represents the greatest integer that can be used to divide the two inputs
input: two integers
output: integer

E:
input: 12, 4
Output: 4
Ex: multiples of 12: 1, 3, 4, 2, 6, 12
    multiples of 4: 1, 2, 4

D:
input: two integers
intermediate: iterate over a range of numbers from 1 to the integer
                -
output: integer

A:
- choose the smaller integer between the two inputs
- declare a variable to hold the max integer
- iterate over integers from 2 to the larger integer argument
    - if the current integer is divisble by both arguments with no remainder, reassign the max variable to current int
- return the max

 */

function gcd(arg1, arg2) {
    let min = Math.min(arg1, arg2);
    console.log(min);
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1