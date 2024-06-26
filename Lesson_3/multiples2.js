// function logMultiples(number) {
//     for (let i = 100; i >= 0; i--) {
//         if (i % number === 0 && i % 2 === 1) {
//             console.log(i);
//         }
//     }
// }

function logMultiples(number) {
    for (let start = Math.floor(100 / number) * number; start >= number; start-= number) {
        if (start % number === 0 && start % 2 === 1) {
            console.log(start);
        }
    }
}

logMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

logMultiples(21);
// output (3x and 1x)
// 63
// 21