"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/*
var color = prompt("What is your favorite color?");
function analyzeColor(color){
    if (color === 'blue') {alert ("I love the color blue!");
        console.log("Color was blue")}
    else if (color === 'red') {alert ("Red is ok...");
        console.log("Color was red")}
    else if (color === 'cyan') {alert ("Cyan is a random color...");
        console.log("Color was cyan")}
    else {alert ("I\'ve never heard of that color...")}
    }
analyzeColor(color);
*/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/* I NEED TO RETURN TO THIS - CAN'T FIGURE IT OUT
console.log(analyzeColor(randomColor));
*/

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
/*
switch (randomColor){
    case 'red':
        alert ("I love red!");
        break;
    case 'orange':
        alert ("I love orange!");
        break;
    case 'yellow':
        alert ("I love yellow!");
        break;
    case 'green':
        alert ("I love green!");
        break;
    case 'blue':
        alert ("I love blue!");
        break;
    case 'indigo':
        alert ("I love indigo!");
        break;
    case 'violet':
        alert ("I love violet!");
        break;
    default:
        alert ("I\ve never heard of that color...");
        break;
}
*/
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/*
function analyzeColor(userColor) {
    var userColor = prompt("Hi! What is your favorite color?");
    switch (userColor) {
        case 'red':
            alert("I love red!");
            break;
        case 'orange':
            alert("I love orange!");
            break;
        case 'yellow':
            alert("I love yellow!");
            break;
        case 'green':
            alert("I love green!");
            break;
        case 'blue':
            alert("I love blue!");
            break;
        case 'indigo':
            alert("I love indigo!");
            break;
        case 'violet':
            alert("I love violet!");
            break;
        default:
            alert("I\ve never heard of that color...");
            break;
    }
}
*/

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/*
var n = prompt("What is your lucky number?");
var amount = prompt("What is your total?");

function calculateTotal(n,amount){
    if (n===0) {
        alert(amount*(1-0));
    } else if (n===1) {
        alert(amount*(1-.1));
    } else if (n===2) {
        alert(amount * (1 - .25));
    } else if (n===3) {
        alert(amount * (1 - .35));
    } else if (n===4) {
        alert(amount * (1 - .5));
    } else if (n===5) {
        alert(amount * (1 - 1));
    } else {
        alert ("Sorry, no discount for you :/")}
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var confirmed = confirm('Would you like to enter a number?');

if (confirmed = true) {
    var n = prompt("Please enter a number.");
    function isEven(n){
        if(n%2===0){
            alert ("Your number is even!");
        }else {
            alert ("Your number is odd");
        }
    }
    function plusOneHundred(n) {
        return (n + 100);
        alert(n + " plus 100 equals "(n + 100))
    }
    function isPositive(n){
        if(n>0){
            alert("Your number is positiive!");
        }else if (n===0){
            alert ("Your number is neither positive nor negative");
        }else {
            alert ("Your number is negative");
        }
    }
}else{
alert ("Ok...I guess that\'s coool...");
}