/*
input inte
output int

factorial(1) => 1 * 1
factorial(2) => 1 * 2
factorial(3) => 1*2*3
create a range of the numbers from 1 to current number
multiply all numbers together
return the result

 */

function factorial(int) {
    let numbers = []
    let element = 0
    do {
        element += 1
        numbers.push(element)
    } while (element < int);

    holder = 1
    numbers.forEach(function(int) {
        holder *= int
        }
    )
    console.log(holder);
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320