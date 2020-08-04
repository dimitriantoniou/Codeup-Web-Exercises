"use strict"
//completed

//while loop starts at 2 ends at 65536
//*2

var i = 2
while (i<=65536){
    console.log(i);
    i*=2;
}

//do while loop exercise

// This is how you get a random number between 50 and 100
// This expression will generate a random number between 1 and 5
//do this thing; check if it's trye; repeat if yes, end if not
/*
var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);
 */

var allCones = Math.floor(Math.random() * 50) + 50;
console.log('We started with ' + allCones + ' cones.');
var conesRemaining = allCones;

do {
    var boughtEachTime = Math.floor(Math.random() * 5) + 1;
    console.log('Number of cones left: ' + conesRemaining);
    if (conesRemaining >= boughtEachTime) {
        console.log(boughtEachTime + ' cones sold...');
        conesRemaining = conesRemaining - boughtEachTime;
    } else if (boughtEachTime > conesRemaining) {
        console.log('I cannot sell you ' + boughtEachTime + ' I only have ' + conesRemaining + ' left.')
    }

} while (conesRemaining = 0);
console.log('Yay. sold them all.');