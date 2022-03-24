var pi = 3.14;
var radius = 4;
var area = pi * radius * radius;

var distanceInKm = 1;
var distanceInMiles = distanceInKm * 0.62;

var main = function (input) {
  var myOutputValue =
    "Hi! " + input + " is equal to " + distanceInMiles + " miles.";
  return myOutputValue;
};
