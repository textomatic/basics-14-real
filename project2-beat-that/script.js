// global constant for number of players
const numPlayers = 2;
// global array for recording which player has played
var playersTurn = new Array(numPlayers).fill(false);
// global array for storing dice rolls prior to concatenation
var tempNumbers = [];
// global array for storing concatenated dice rolls
var concatNumbers = [];

// helper function to generate random dice roll
var getRandomDiceRoll = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// helper function to generate formatted output asking for user option
var optionOutputFormatter = function (playerNum, dice1, dice2) {
  var output = `<p>🎲 WELCOME, PLAYER ${playerNum} 🎲</p>`;
  output += `<p>You rolled ${dice1} for dice one and ${dice2} for dice two.</p>`;
  output += `<p>Choose the order of the dice by entering "1" or "2".</p>`;
  return output;
};

// helper function to generate formatted output showing user's choice of dice
var choiceOutputFormatter = function (playerNum, choice) {
  var output = `<p>You chose Dice ${choice} first. Your number is ${concatNumbers[playerNum]}.`;
  if (playerNum + 1 < numPlayers) {
    output += `<p>It is now Player ${playerNum + 2}'s turn.</p>`;
  }
  return output;
};

var main = function (input) {
  // default output is empty, so that it is easier to append later on
  var output = "";
  // use a for loop to go through each player's turn
  // this makes it easy to manage games as numPlayers may not always be 2
  for (var index = 0; index < numPlayers; index += 1) {
    if (playersTurn[index] == false) {
      // roll dice twice if player has not played yet
      // log the index number to console for debugging
      console.log(`IF Index: ${index}`);
      var dice1 = getRandomDiceRoll();
      var dice2 = getRandomDiceRoll();
      // log the dice rolls to console for debugging
      console.log(`Dice 1: ${dice1}`);
      console.log(`Dice 2: ${dice2}`);
      // push dice rolls to tempNumbers array
      tempNumbers.push(dice1);
      tempNumbers.push(dice2);
      // pass player index and both dice rolls to output formatter
      output = optionOutputFormatter(index + 1, dice1, dice2);
      // mark this player as having played his turn
      playersTurn[index] = true;
      return output;
    } else if (concatNumbers.length == index) {
      // if player has rolled dice already but concatNumbers array not updated yet
      // log the index number to console for debugging
      console.log(`ELSE IF Index: ${index}`);
      // ensure input is of type number
      var choice = Number(input);
      // define new variable to store concatenated number
      var concatNum = 0;
      if (choice == 1) {
        // if user's dice choice is 1
        // the second dice roll to be popped should be in the tenth digit
        concatNum = tempNumbers.pop() + tempNumbers.pop() * 10;
      } else if (choice == 2) {
        // if user's dice choice is 2
        // the first dice roll to be popped should be in the tenth digit
        concatNum = tempNumbers.pop() * 10 + tempNumbers.pop();
      } else {
        // otherwise, warn user to enter a valid choice
        return `<p>Please enter a valid dice number!</p>`;
      }
      // log concatenated number to console for debugging
      console.log(`concatNum: ${concatNum}`);
      // push concatenated number to array
      concatNumbers.push(concatNum);
      // pass player index and dice roll choice to output formatter
      output = choiceOutputFormatter(index, choice);
      // if this is not the final player, display output
      if (index + 1 != numPlayers) {
        return output;
      }
    }
  }

  var winningNum = 0;
  var winningPlayer = 0;
  // use a for loop to update the winning number and winning player
  for (var index = 0; index < concatNumbers.length; index += 1) {
    if (concatNumbers[index] > winningNum) {
      winningNum = concatNumbers[index];
      winningPlayer = index + 1;
    }
  }

  // reset the global arrays for a new game
  concatNumbers = [];
  playersTurn = new Array(numPlayers).fill(false);

  output += `<p>The winner is Player ${winningPlayer}!</p><p>Press "Submit" to play again.</p>`;
  return output;
};
