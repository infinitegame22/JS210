let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters: \n");
let width = rlSync.question("Enter the width of the room in meters: \n");
console.log(`The are of the room is ${length * width} square meters (${length * width * 10.7639}).`)