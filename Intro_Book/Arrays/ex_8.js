/*
input array
output array

E:  input: ['a', 'abcd', 'abcde', 'abc', 'ab']
    output: [1, 5, 3]

    these numbers represent the odd lengths of the strings in the array

 */

function mapArraytoLengths (array) {
    return array.map (element => element.length);
}

function oddLengths(array) {
    return array.reduce(mapArraytoLengths(array), 0);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]