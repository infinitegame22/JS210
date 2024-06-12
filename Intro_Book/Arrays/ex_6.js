let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
    let arr1 = arr.map(element => {
                    return element.length;
                })
    // console.log(arr1);

    result = arr1.filter(element => element % 2 !== 0);
    return result;
}