"use strict";

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});

//Use jQuery to select an element by the id. Alert the contents of the element.
//var coreValues = $('#core-values').html();
//alert(coreValues);

//Update the jQuery code to select and alert a different id.
//var values = $('#values').html();
//alert(values);

//Use the same id on 2 elements. How does this change the jQuery selection?
//var values = $('#value').html();
//alert(value);

//Remove the duplicate id. Each id should be unique on that page.

//Remove your custom jQuery code from previous exercises.

//Update your code so that at least 3 different elements have the same class named codeup.

//Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
$('.codeup').css('border', '1 px solid #F00');

//Remove the class from one of the elements. Refresh and test that the border has been removed.

//Give another element an id of codeup. Does this element get a border now?

//Remove your custom jQuery code from previous exercises.

//Using jQuery, set the font-size of all li elements to 20px.
$('li').css('font-size','20px');

// Craft selectors that highlight all the h1, p, and li elements.

//Create a jQuery statement to alert the contents of your h1 element(s).
var headers = $('h1').html();
alert(headers);

//Combine your selectors that highlight all the h1, p, and li elements.
$('.codeup,li,p');

//lesson notes

/*
var contents = $('#codeup').html();
alert(contents);


$('.important').css('background-color', 'yellow');

$('p').css('font-size', '14px');

$('.important, p').css('background-color', '#FF0');

$('*').css('border', '1px solid #F00');

 */