/*
goal: intake an integer and log two prime integers that add up to the input argument
input: integer
output: 2 integers

E:
input: 3
output: null
Ex:
 Rule of the problem says to log null if the input is odd or less than 4

input: 4
output: 2 2
Ex: Why doesn't this log 1 and 3 to the console as well? - this theory only includes the numbers greater than 2
It chose the same prime number twice.

input: 12
output: 5 7
Explanation: why doesn't this also log 1 and 11? - because it starts from 2 and increments from there

input: 100
output:
 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

D:
input: integer
intermediate: store the numbers in pairs in an array
output: 2 integers

A:
- declare an object called pairs_of_sum
- iterate from 2 to but not including the argument
    - second iteration from 2 up to but not including the argument
        - if the first number and second number add up to the input argument
            - push the two numbers into pairs_of_sum
- return pairs_of_sum

Helper method to log pairs to console
input array - pairs_of_sum
- if there is only one element in the input array
    - iterate over the pairs_of_sum and log all elements from each subarray to the console.
- else
    - need to delete all duplicate pairs form the array.

Helper method:
- to find prime number
-
 */

function isPrime(number) {
    if (number <= 1 || (number > 2 && number % 2 == 0)) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function checkGoldbach(expectedSum) {
    if (expectedSum < 4 || expectedSum % 2 === 1) {
        return null;
    }
    let pairs_of_sum = [];
    for (let firstNumber = 2; firstNumber < expectedSum; firstNumber++) {
        for (let secondNumber = 2; secondNumber < expectedSum; secondNumber++) {
            if ((firstNumber + secondNumber === expectedSum) && isPrime(firstNumber)) {
                if (isPrime(secondNumber)) {
                    pairs_of_sum.push([firstNumber, secondNumber]);
                }
            }
        }
    }
    //pairs_of_sum.forEach((subarray) => console.log(`${subarray[0]} ${subarray[1]}`));
    return pairs_of_sum;
}


//console.log(checkGoldbach(3));
// // logs: null
//
checkGoldbach(4);
// // logs: 2 2
//
checkGoldbach(12);
// // logs: 5 7
//
// checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53