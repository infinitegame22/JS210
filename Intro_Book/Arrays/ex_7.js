function sumOfSquares(arr) {
    return arr.reduce((acc, cur) => {
        return acc + (cur * cur);
    })
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83