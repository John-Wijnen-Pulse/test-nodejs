const ld = require('lodash');
const Point = require('./point.js');

function calculateCircumference(r) {
    return (2 * Math.PI * r);
}

var circle1 = calculateCircumference(1);
var circle2 = calculateCircumference(2);
var numbers = [1,2,3,4,5,6,7,8,9,10];

module.exports.doCalculations = function() {
    console.log((circle1 + circle2) / Math.PI);
    console.log(Math.min(...numbers)); 
    console.log(ld.chunk(numbers, 3));
    var p = new Point(3, 4);
    console.log(p.coordinate());
};