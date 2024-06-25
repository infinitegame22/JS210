function multiplesOfThreeAndFive() {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            console.log(`${i}!`);
        } else if (i & 3 == 0) {
            console.log(i);
        } else if (i & 5 == 0) {
            console.log(i);
        }
    }
}


multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity