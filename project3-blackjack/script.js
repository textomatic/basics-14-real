var gameOver = false;
var playerWins = false;
var playerCards = [];
var computerCards = [];
var playerStand = false;
var deck = null;
const cardEmoji = new Map();

var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var cardValue = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "Ace";
        cardValue = 11;
      } else if (cardName == 11) {
        cardName = "Jack";
        cardValue = 10;
      } else if (cardName == 12) {
        cardName = "Queen";
        cardValue = 10;
      } else if (cardName == 13) {
        cardName = "King";
        cardValue = 10;
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: cardValue
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

// Create a Map of emoji for each card and their corresponding HTMl code
var createEmojiMap = function (emojiMap) {
  emojiMap.set("Ace Spades", "&#x1F0A1;");
  emojiMap.set("2 Spades", "&#x1F0A2;");
  emojiMap.set("3 Spades", "&#x1F0A3;");
  emojiMap.set("4 Spades", "&#x1F0A4;");
  emojiMap.set("5 Spades", "&#x1F0A5;");
  emojiMap.set("6 Spades", "&#x1F0A6;");
  emojiMap.set("7 Spades", "&#x1F0A7;");
  emojiMap.set("8 Spades", "&#x1F0A8;");
  emojiMap.set("9 Spades", "&#x1F0A9;");
  emojiMap.set("10 Spades", "&#x1F0AA;");
  emojiMap.set("Jack Spades", "&#x1F0AB;");
  emojiMap.set("Knight Spades", "&#x1F0AC;");
  emojiMap.set("Queen Spades", "&#x1F0AD;");
  emojiMap.set("King Spades", "&#x1F0AE;");
  emojiMap.set("Ace Hearts", "&#x1F0B1;");
  emojiMap.set("2 Hearts", "&#x1F0B2;");
  emojiMap.set("3 Hearts", "&#x1F0B3;");
  emojiMap.set("4 Hearts", "&#x1F0B4;");
  emojiMap.set("5 Hearts", "&#x1F0B5;");
  emojiMap.set("6 Hearts", "&#x1F0B6;");
  emojiMap.set("7 Hearts", "&#x1F0B7;");
  emojiMap.set("8 Hearts", "&#x1F0B8;");
  emojiMap.set("9 Hearts", "&#x1F0B9;");
  emojiMap.set("10 Hearts", "&#x1F0BA;");
  emojiMap.set("Jack Hearts", "&#x1F0BB;");
  emojiMap.set("Knight Hearts", "&#x1F0BC;");
  emojiMap.set("Queen Hearts", "&#x1F0BD;");
  emojiMap.set("King Hearts", "&#x1F0BE;");
  emojiMap.set("Ace Diamonds", "&#x1F0C1;");
  emojiMap.set("2 Diamonds", "&#x1F0C2;");
  emojiMap.set("3 Diamonds", "&#x1F0C3;");
  emojiMap.set("4 Diamonds", "&#x1F0C4;");
  emojiMap.set("5 Diamonds", "&#x1F0C5;");
  emojiMap.set("6 Diamonds", "&#x1F0C6;");
  emojiMap.set("7 Diamonds", "&#x1F0C7;");
  emojiMap.set("8 Diamonds", "&#x1F0C8;");
  emojiMap.set("9 Diamonds", "&#x1F0C9;");
  emojiMap.set("10 Diamonds", "&#x1F0CA;");
  emojiMap.set("Jack Diamonds", "&#x1F0CB;");
  emojiMap.set("Knight Diamonds", "&#x1F0CC;");
  emojiMap.set("Queen Diamonds", "&#x1F0CD;");
  emojiMap.set("King Diamonds", "&#x1F0CE;");
  emojiMap.set("Black Joker", "&#x1F0CF;");
  emojiMap.set("Ace Clubs", "&#x1F0D1;");
  emojiMap.set("2 Clubs", "&#x1F0D2;");
  emojiMap.set("3 Clubs", "&#x1F0D3;");
  emojiMap.set("4 Clubs", "&#x1F0D4;");
  emojiMap.set("5 Clubs", "&#x1F0D5;");
  emojiMap.set("6 Clubs", "&#x1F0D6;");
  emojiMap.set("7 Clubs", "&#x1F0D7;");
  emojiMap.set("8 Clubs", "&#x1F0D8;");
  emojiMap.set("9 Clubs", "&#x1F0D9;");
  emojiMap.set("10 Clubs", "&#x1F0DA;");
  emojiMap.set("Jack Clubs", "&#x1F0DB;");
  emojiMap.set("Knight Clubs", "&#x1F0DC;");
  emojiMap.set("Queen Clubs", "&#x1F0DD;");
  emojiMap.set("King Clubs", "&#x1F0DE;");
  emojiMap.set("Backside", "&#x1F0A0;");
};

var main = function (input) {
  if (input == "") {
    removeConfetti();
    gameOver = false;
    playerWins = false;
    createEmojiMap(cardEmoji);
    deck = makeDeck();
    deck = shuffleCards(deck);
    playerStand = false;
    playerCards = [];
    computerCards = [];
    for (var i = 0; i < 2; i += 1) {
      playerCards.push(deck.pop());
      computerCards.push(deck.pop());
    }
  }
  if (input == "hit") {
    playerCards.push(deck.pop());
  }
  if (input == "stand") {
    playerStand = true;
    while (getSumOfDeck(computerCards) <= 16) {
      computerCards.push(deck.pop());
    }
  }
  var playerStatus = isBustOrBlackJack(playerCards);
  var computerStatus = isBustOrBlackJack(computerCards);
  var verdict = compareStatuses(playerStatus, computerStatus);
  var output = generateSummary();
  output += `<b>Status</b>:<br>`;
  output += verdict;

  if (gameOver) {
    var hitButton = document.querySelector("#hit-button");
    var standButton = document.querySelector("#stand-button");
    hitButton.parentNode.removeChild(hitButton);
    standButton.parentNode.removeChild(standButton);
  }

  if (playerWins) {
    addConfetti();
    output += `<p><img class="confetti-gif" src="https://c.tenor.com/vY276tPmR2MAAAAC/usagyuuun-confetti.gif" /></p>`;
  } else {
    output += `<p><img class="confetti-gif" src="https://c.tenor.com/PX1EYGJ5ua4AAAAC/usagyuuun-usagyuuun_sticker.gif" /></p>`;
  }

  return output;
};

var generateSummary = function () {
  var output = `<b>Player hand</b>: <br><span class="card-emoji">`;
  for (var i = 0; i < playerCards.length; i += 1) {
    let cardNameAndSuit =
      String(playerCards[i].name) + " " + playerCards[i].suit;
    output += `${cardEmoji.get(cardNameAndSuit)}`;
    if (i + 1 != playerCards.length) {
      output += ` `;
    }
  }
  output += `</span><br>Sum: ${getSumOfDeck(
    playerCards
  )}<br><hr><b>Computer hand</b>: <br><span class="card-emoji">`;
  for (var i = 0; i < computerCards.length; i += 1) {
    let cardNameAndSuit =
      String(computerCards[i].name) + " " + computerCards[i].suit;
    if (!gameOver && i == 0) {
      output += `${cardEmoji.get("Backside")} `;
      continue;
    }
    output += `${cardEmoji.get(cardNameAndSuit)}`;
    if (i + 1 != computerCards.length) {
      output += ` `;
    }
  }
  if (!gameOver) {
    output += `</span><br>Sum: ?<br><hr>`;
  } else {
    output += `</span><br>Sum: ${getSumOfDeck(computerCards)}<br><hr>`;
  }
  return output;
};

var getSumOfDeck = function (deck) {
  var sum = 0;
  for (var i = 0; i < deck.length; i += 1) {
    sum += Number(deck[i].rank);
  }
  return sum;
};

var isBustOrBlackJack = function (deck) {
  var sum = getSumOfDeck(deck);
  if (sum > 21) {
    return "bust";
  } else if (sum == 21) {
    return "blackjack";
  }
  return 21 - sum;
};

var compareStatuses = function (playerStatus, computerStatus) {
  if (playerStatus == "bust") {
    gameOver = true;
    return `<br>You bust! Computer wins!<br><br>Please press "Restart" button to start a new game.`;
  } else if (computerStatus == "bust") {
    gameOver = true;
    playerWins = true;
    return `<br>Computer bust! You win!<br><br>Please press "Restart" button to start a new game.`;
  } else if (playerStatus == computerStatus && playerStatus == "blackjack") {
    gameOver = true;
    return `<br>Tie blackjack! It's a draw!<br><br>Please press "Restart" button to start a new game.`;
  } else if (playerStatus == "blackjack") {
    gameOver = true;
    playerWins = true;
    return `<br>Blackjack! You win!<br><br>Please press "Restart" button to start a new game.`;
  } else if (computerStatus == "blackjack") {
    gameOver = true;
    return `<br>Blackjack! Computer wins!<br><br>Please press "Restart" button to start a new game.`;
  } else if (playerStatus < computerStatus && playerStand) {
    gameOver = true;
    playerWins = true;
    return `<br>You win!<br><br>Please press "Restart" button to start a new game.`;
  } else if (computerStatus < playerStatus && playerStand) {
    gameOver = true;
    return `<br>Computer wins!<br><br>Please press "Restart" button to start a new game.`;
  } else if (computerStatus == playerStatus && playerStand) {
    gameOver = true;
    return `<br>Tie! It's a draw!<br><br>Please press "Restart" button to start a new game.`;
  }
  return `<br>Please press "Hit" button to draw another card or "Stand" button to end your turn.`;
};

var addConfetti = function () {
  var container = document.querySelector(".container");
  container.className += " bg-confetti-animated";
};

var removeConfetti = function () {
  var container = document.querySelector(".container");
  if (container.classList.contains("bg-confetti-animated")) {
    container.classList.remove("bg-confetti-animated");
  }
};
