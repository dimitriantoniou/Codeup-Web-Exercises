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

//bold list on h3 click
$('h3').click(function() {
    $(this).next().children().css('font-weight','bold');
});

//When any list item is clicked, first li of the parent ul should have a font color of blue.
$('li').click(function(){
   $(this).parent().children().first().css('color','blue')
});