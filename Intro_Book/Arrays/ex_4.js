let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
];

map1 = myArray.map(item => {
            if (item % 2 === 0) {
                return 'even';
            }
            else {
                return 'odd';
            }
        })

console.log(map1);