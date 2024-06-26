// function multiplesOfThreeAndFive() {
//     for (let i = 1; i <= 100; i++) {
//         if ((i % 3 === 0) && (i % 5 === 0)) {
//             console.log(`${i}!`);
//         } else if (i % 3 === 0) {
//             console.log(String(i));
//         } else if (i % 5 === 0) {
//             console.log(String(i));
//         }
//     }
// }
//
//
// multiplesOfThreeAndFive();

function multiplesOfThreeAndFive(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(String(i) + '!');
        } else if (i % 3 === 0 || i % 5 === 0) {
            console.log(String(i));
        }
    }
}

multiplesOfThreeAndFive(10, 15);
multiplesOfThreeAndFive(50, 150);

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity