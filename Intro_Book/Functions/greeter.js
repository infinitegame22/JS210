let rlSync = require('readline-sync');

function getFullName() {
    let firstName = rlSync.question("What's your first name?\n");
    let lastName = rlSync.question("What's your last name?\n");
    console.log(`Hi there ${firstName} ${lastName}!`);
}

getFullName();