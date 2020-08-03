// Exercise 2
// the 1st output should be x*1, the 2nd should be x*2, etc...
// as long as the multiplier is less than or equal to 10, this loop should execute
// the number input should be constant, while the multiplier increases by 1 starting at 1
"use strict"
function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        console.log(x*i);
    }
}

//Exercise 3
//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

for (var i=0; i<10;i++){
    var ran = Math.floor(Math.random() * (200 - 20)) + 20;
    if (ran%2===0){
        console.log(ran + " is even.");
    }else if (ran%2===1){
        console.log(ran + " is odd.")
    }
}

//exercise 4
//output starts with 1 digit and increments
//output starts at 1 and increments
//output stops at nine nines

for (var i=1; i<10; i++){
    var stringToRepeat = "" + i;
    console.log(stringToRepeat.repeat(i));
}

//exercise 5
for (var i=105;i>=5; i-=5){
    console.log(i-5);
}