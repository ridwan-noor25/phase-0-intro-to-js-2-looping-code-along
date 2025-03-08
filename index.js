// Code your solutions in this file
for (let age = 30; age<40; age++) {
    console.log(`i'm ${age} years old. Happy birthday to me!`);
    debugger;
}

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}