"use strict"
//completed

alert ("Welcome to my Website!")
//var userInput = prompt("What's your favorite color?");
//console.log(userInput+ 'is my favorite color too!');

/* Instructions
Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.
*/


//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
//     If price for a movie per day is $3, how much will you have to pay?
var littleMermaid = prompt('How many days is your rental for The Little Mermaid?');
var brotherBear = prompt('How many daysis your rental for Brother Bear?');
var hercules = prompt('How many days is your rental for Hercules?');
var dailyPrice=prompt('How much is the rental per movie per day?');
var totalOwed= (littleMermaid*dailyPrice)+(brotherBear*dailyPrice)+(hercules*dailyPrice);
alert ("You will have to pay $"+totalOwed+".");


//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
    //How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googleHours = prompt('How many hours did you work for Google this week?');
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebookHours = prompt("How many hours did you work for Facebook this week?");
var totalEarned = (googleHours*400)+(amazonHours*380)+(facebookHours*350);
alert ("You've earned $"+totalEarned+" this week!");

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classSize = confirm("Confirm that this class is not full.");
var classSchedule = confirm("Confirm that this class does not conflict with your schedule.");
var admittance = classSize && classSchedule;
if (admittance === true) {
    alert("You are now enrolled in this class!");
    }else{
        alert("Sorry, no seat for you :/");
}

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var premiumMember = confirm("Please confirm that you are a premium member.");
var itemQuantity = confirm("Please confirm that you have purchased more than 2 items.");
var offerStatus = confirm("Please confirm that the offer has not expired");
var eligibility =  (itemQuantity || premiumMember) && offerStatus;
if (eligibility === true){
    alert ("Congratulations! We've applied your offer.");
}else{
    alert ("Sorry, you don't qualify.");
}

//console.log("Hello from external JavaScript");