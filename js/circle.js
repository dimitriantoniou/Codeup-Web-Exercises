(function() {
    "use strict";
//completed
    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // TODO: return the proper value
            var areaReturn = Math.PI * Math.pow(this.radius, 2);
            return areaReturn;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                var roundArea = Math.round(this.getArea(this.radius));
            } else {
                var roundArea = circle.getArea(circle.radius);
            }
            console.log("Area of a circle with radius: " + this.radius + " is: " + roundArea);
        }
    }

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    // TODO: Change the radius of the circle to 5.
circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

})();
