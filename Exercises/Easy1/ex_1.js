for (let i = 1; i < 100; i+=2) {
 console.log(i);
}

function oddNumsLogged(start, end) {
    if (start % 2 === 0) {
        start += 1
    }
    while (start <= end) {
        console.log(start);
        start += 2;
    }
}