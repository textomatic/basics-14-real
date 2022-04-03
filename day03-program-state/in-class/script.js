var correctGuesses = 0;

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var myOutputValue = "";
  var secretWord = getSecretWord();
  if (secretWord == input) {
    correctGuesses = correctGuesses + 1;
  }
  if (correctGuesses == 2) {
    myOutputValue = `Your guess: ${input}; Secret word: ${secretWord}; You win!`;
    correctGuesses = 0;
  } else {
    myOutputValue = `Your guess: ${input}; Secret word: ${secretWord}; Need ${
      2 - correctGuesses
    } more correct guesses to win!`;
  }
  return myOutputValue;
};

var getSecretWord = function (input) {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
  if (randomNumber == 1) {
    return "banana";
  } else if (randomNumber == 2) {
    return "chisel";
  } else {
    return "faucet";
  }
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "";
  var secretWord = getSecretWord();
  if (secretWord == input) {
    correctGuesses = correctGuesses + 1;
  } else {
    correctGuesses = 0;
  }
  if (correctGuesses == 2) {
    myOutputValue = `Your guess: ${input}; Secret word: ${secretWord}; You win!`;
    correctGuesses = 0;
  } else {
    myOutputValue = `Your guess: ${input}; Secret word: ${secretWord}; Need ${
      2 - correctGuesses
    } more correct guesses to win!`;
  }
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
