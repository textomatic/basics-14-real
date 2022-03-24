var fahrenheitToCelsiusHelper = function (fahrenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var myOutputValue = fahrenheitToCelsiusHelper(input);
  return myOutputValue;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (tripLengthInMiles) {
  // Some code that calculates total fuel cost
  var fuelCost = (tripLengthInMiles / 9) * 2.2;
  return fuelCost;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  var distanceInMiles = convertKmToMiles(input);
  var myOutputValue = calculateTotalFuelCost(distanceInMiles);
  return myOutputValue;
};

var calculateTotalFuelCostSavings = function (
  tripLengthInMiles,
  costPerLitreOfFuel
) {
  // Some code that calculates total fuel cost
  var fuelCost = (tripLengthInMiles / 9) * costPerLitreOfFuel;
  return fuelCost;
};

var roadTripCostComfortableMain = function (input) {
  // Some code that calculates total fuel cost using the 2 functions above
  var distanceInMiles = convertKmToMiles(input);
  var fuelSavings = calculateTotalFuelCostSavings(distanceInMiles, 0.2);
  return fuelSavings;
};

var calculateTotalGrams = function (noofguest) {
  var totalGrams = noofguest * 2 * 4 * 1.5;
  return totalGrams;
};

var convertGramsToPounds = function (totalGrams) {
  var totalPounds = totalGrams / 454;
  return totalPounds;
};

var calculateMachineRuntime = function (totalPounds) {
  var totalHours = totalPounds / 5;
  return totalHours;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var totalGrams = calculateTotalGrams(input);
  var totalPounds = convertGramsToPounds(totalGrams);
  var totalHours = calculateMachineRuntime(totalPounds);
  return totalHours;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
