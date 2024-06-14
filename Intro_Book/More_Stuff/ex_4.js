// function displayLargestNumber (array) {
//     return Math.max(...array);
// }
//
// console.log(displayLargestNumber([1, 2, 3, 4, 5, 6]))
// console.log(displayLargestNumber([1, 6, 3, 2]))
// console.log(displayLargestNumber([-1, -6, -3, -2]))
// console.log(displayLargestNumber([2, 2]))
//
// function arrayMax(numbers) {
//     let max = numbers[0]
//     for (let i = 1; i <= numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
//     return max;
// }
//
// console.log(arrayMax([1, 2, 3, 4, 5, 6]))
// console.log(arrayMax([-1, -2, -3, -4, -5, -6]))
// console.log(arrayMax([2, 2]))

function reduceMax(numbers) {
    return numbers.reduce((acc, x) => {
        return Math.max(acc, x);
    }, numbers[0]);
}

console.log(reduceMax([1, 2, 3, 4, 5, 6]))
console.log(reduceMax([-1, -2, -3, -4, -5, -6]))
console.log(reduceMax([2, 2]))