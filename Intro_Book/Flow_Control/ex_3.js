function evenOrOdd(number) {
    if (typeof(number) !== 'number') {
        console.log('TypeError: please enter a number');
        return;
    }
    if (number % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

evenOrOdd('string');
evenOrOdd(3);