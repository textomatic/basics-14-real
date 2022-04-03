var userName = "";
var computerWins = 0;
var userWins = 0;
var totalDraws = 0;
var totalPlays = 0;

var main = function (input) {
  // Store user name if variable is empty
  if (userName == "") {
    if (input != "") {
      userName = input;
      return `Welcome ${userName}! Please enter a move to start the game: Scissors, Paper, or Stone`;
    } else {
      return "Welcome! Please enter your name to begin playing!";
    }
  }

  // Validate user input
  var outputValue = "Please enter Scissors, Paper, or Stone only.";
  if (input != "Scissors" && input != "Paper" && input != "Stone") {
    return outputValue;
  }

  // Update number of plays
  totalPlays += 1;

  // Get scissors/paper/stone from computer
  var computerMove = getScissorsPaperStone();

  // Print to console to debug computer's move
  console.log(`computerMove: ${computerMove}`);

  // Display current play moves
  outputValue = `You chose ${input} ${getEmojiHTML(input)}`;
  outputValue += `<br>Computer chose ${computerMove} ${getEmojiHTML(
    computerMove
  )}`;

  // Compare input with computer's scissors/paper/stone
  // Return statement on whether user won/lost/got a draw
  if (
    (input == "Scissors" && computerMove == "Paper") ||
    (input == "Paper" && computerMove == "Stone") ||
    (input == "Stone" && computerMove == "Scissors")
  ) {
    userWins += 1;
    outputValue += "<br>You win! Congratulations!";
  } else if (
    (input == "Paper" && computerMove == "Scissors") ||
    (input == "Stone" && computerMove == "Paper") ||
    (input == "Scissors" && computerMove == "Stone")
  ) {
    computerWins += 1;
    outputValue += "<br>You lose! Bummer...";
  } else {
    totalDraws += 1;
    outputValue += "<br>It's a draw!";
  }

  // Display winning statistics
  outputValue += `<br>=========Game Stats==========`;
  outputValue += `<br>${userName} won: ${userWins}/${totalPlays} times`;
  outputValue += `<br>Computer won: ${computerWins}/${totalPlays} times`;
  outputValue += `<br>Total draws: ${totalDraws}/${totalPlays} times`;
  outputValue += `<br>${userName}'s winning percentage: ${
    (userWins / totalPlays) * 100
  }%`;
  outputValue += `<br>Computer winning percentage: ${
    (computerWins / totalPlays) * 100
  }%`;

  return outputValue;
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

var getEmojiHTML = function (move) {
  // Define variable for emoji HTML
  var emoji = "";

  switch (move) {
    case "Scissors":
      emoji = "&#9986;";
      break;
    case "Paper":
      emoji = "&#128466;";
      break;
    case "Stone":
      emoji = "&#129704;";
      break;
  }

  return emoji;
};
