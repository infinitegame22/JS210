/*
input array
output array

E:  input: ['a', 'abcd', 'abcde', 'abc', 'ab']
    output: [1, 5, 3]

    these numbers represent the odd lengths of the strings in the array

 */



function oddLengths(strings) {
    return strings.reduce((filteredNumbersArray, letters) => {
        let length = letters.length;
        if (length % 2 === 1) {
            filteredNumbersArray.push(length);
        }
        return filteredNumbersArray;
    }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]