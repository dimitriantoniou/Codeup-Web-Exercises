"use strict";

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});


var contents = $('#codeup').html();
alert(contents);
/*

$('.important').css('background-color', 'yellow');

$('p').css('font-size', '14px');
*/

$('.important, p').css('background-color', '#FF0');

$('*').css('border', '1px solid #F00');