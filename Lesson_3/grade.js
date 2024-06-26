// prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78
//
// // log to the console
// Based on the average of your 3 scores your letter grade is "B".

let rlSync = require("readline-sync");
let score1 = rlSync.question("Enter score 1: ");
let score2 = rlSync.question("Enter score 2: ");
let score3 = rlSync.question("Enter score 3: ");
let average = (Number(score1) + Number(score2) + Number(score3))/ 3;
console.log(average);
let grade = ''
if (average >= 90) {
    grade = 'A';
} else if (average >= 70 && average < 90) {
    grade = 'B';
} else if (average >= 50 && average < 70) {
    grade = 'C';
} else {
    grade = 'F';
}
console.log(`Based on the average of your 3 scores your letter grade is "${grade}"`);