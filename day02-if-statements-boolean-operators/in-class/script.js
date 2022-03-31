var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  // Hawker food is a convenient and affordable food option in Singapore. To help educate non-Singaporeans about hawker food, create an app that takes a hawker dish name as input, and tells users whether the dish has a "rice", "noodle", or "other" base. Some sample dishes are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".
  // For example, if a user enters "laksa", the program should output "noodle". If a user enters "roti prata", the program could output "other".
  var myOutputValue = `${input} has neither rice nor noodle base.`;
  if (input.includes("rice") || input.includes("nasi")) {
    myOutputValue = `${input} has a rice base.`;
  } else if (
    input.includes("mee") ||
    input.includes("laksa") ||
    input.includes("noodle")
  ) {
    myOutputValue = `${input} has a noodle base.`;
  }
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
