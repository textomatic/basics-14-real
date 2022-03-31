var main = function (input) {
  // Validate user ihput
  if (input != "Scissors" && input != "Paper" && input != "Stone") {
    return "Please enter Scissors, Paper, or Stone only.";
  }
  // Get scissors/paper/stone from computer
  var computerMove = getScissorsPaperStone();

  // Print to console to debug computer's move
  console.log(`computerMove: ${computerMove}`);

  // Compare input with computer's scissors/paper/stone
  // Return statement on whether user won/lost/got a draw
  if (
    (input == "Scissors" && computerMove == "Paper") ||
    (input == "Paper" && computerMove == "Stone") ||
    (input == "Stone" && computerMove == "Scissors")
  ) {
    return "You win!";
  } else if (
    (input == "Paper" && computerMove == "Scissors") ||
    (input == "Stone" && computerMove == "Paper") ||
    (input == "Scissors" && computerMove == "Stone")
  ) {
    return "You lose!";
  } else {
    return "It's a draw!";
  }
};

var getScissorsPaperStone = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 3 inclusive.
  var randomNumber = randomInteger + 1;

  // Print to console to check random number
  console.log(`random number is: ${randomNumber}`);

  // Return the string Scissors/Paper/Stone depending on randomNumber value
  if (randomNumber == 1) {
    return "Scissors";
  } else if (randomNumber == 2) {
    return "Paper";
  } else {
    return "Stone";
  }
};
