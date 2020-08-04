//write a loop that will output every odd number between 1 and 50
//prompt the user for an odd number between 1 and 50
//at the user number, replace the text with a new "Oops, skipping this" message
//continue after the user number
//input cannot be even,less than 1, greater than 50, or not a number
"use strict"

var randomNumber
while (true) {
    var input = prompt("Please give me an odd integer between 1 and 50");
    if (input < 50 && input % 2 !== 0 && !Number.isNaN(input)) {
    randomNumber = input
        break;
    }
}

console.log('The number to skip is ' + randomNumber)

//can't figure out how to get the yikes message to display

for (i=1;i<50;i+=2) {
    if (i == randomNumber) {
        console.log('Yikes! Skipping number: ' + i);
        continue;
    }else {
        console.log('Here is an odd number: ' + i);
    }
}

