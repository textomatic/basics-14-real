var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;

  if (randomDiceNumber == input) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  }

  return myOutputValue;
};

var lastRoll = NaN;

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = `Your last roll was ${lastRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;

  if (randomDiceNumber == input) {
    myOutputValue = `Your last roll was ${lastRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  }

  lastRoll = randomDiceNumber;

  return myOutputValue;
};

var numWin = 0;
var totalPlayed = 1;

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var randomDiceNumber = rollDice();
  if (randomDiceNumber == input) {
    numWin = numWin + 1;
  }
  var percentageWin = (numWin / totalPlayed) * 100;
  totalPlayed = totalPlayed + 1;

  if (randomDiceNumber == input) {
    return `You win ${percentageWin}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
  } else {
    return `You win ${percentageWin}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
  }
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
