"use strict";

//button <button id="list-syle-time">Style list ^</button>
//each ul $('#codeup').click(function() {
//     alert('h1 with id "codeup" was clicked');
// });
//list li in each ul
//yellow background

$(document).ready(function() {
    $('#list-style-item').click(function() {
        $('li').last().css('backgroundColor','#FF0');
    });
});