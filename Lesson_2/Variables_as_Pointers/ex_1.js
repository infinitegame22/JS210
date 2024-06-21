const _ = require('lodash');

let myWord = 'Hello';
let myOtherWord = myWord;

// console.log(myWord);
// console.log(myOtherWord);
// console.log(myWord === myOtherWord);
// console.log(myWord == myOtherWord);
console.log(_.isEqual(myWord, myOtherWord));