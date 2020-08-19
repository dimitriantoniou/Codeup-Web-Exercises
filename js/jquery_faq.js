"use strict";

//button <button id="list-syle-time">Style list ^</button>
//each ul $('#codeup').click(function() {
//     alert('h1 with id "codeup" was clicked');
// });
//list li in each ul
//yellow background



//add invisible class to all dd elements
$(document).ready(function() {
    $("dd").addClass("invisible");
    $('#sign-up').hide();
});

//toggle visibility of dd elements
$(document).ready(function() {
    $('#dd-hide').click(function (event) {
        $('dd').toggleClass('invisible');
    })
});


//last li in each ul turns yellow

$('#list-style-time').click(function() {
    $('li').each(function(index){
    if (index %4 === 0){
        $(this).css('backgroundColor','#FF0');
    }
    });
});

/*
//bold list on h3 click
$('h3').click(function() {
    $(this).next().children().css('font-weight','bold');
});
 */

//When any list item is clicked, first li of the parent ul should have a font color of blue.
$('li').click(function(){
   $(this).parent().children().first().css('color','blue')
});

//When the 'x' is clicked, hide the entire div element.
$('#x').click(function(){
    $(this).hide();
});

/*
The uls next to each h3 that contain facts about each park should start out hidden,
 and when the corresponding h3 is clicked, the display of the ul should be toggled
 with a sliding effect.
*/
$('h3').click(function(){
    $(this).next().slideToggle(2500);
})

//After the user has been on the page for 8 seconds,
// an h2 should fade in that asks the user to register for the site.


setTimeout( function() {
    $('#sign-up').fadeIn();
    $('main').css('opacity', '0.1');
    $('#sign-up').css('opacity', '1');
}, 8000);
