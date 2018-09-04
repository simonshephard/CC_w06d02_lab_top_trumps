const Card = require('./card.js')

const Game = function(player1, player2) {

  this.player1 = player1;
  this.player2 = player2;
  this.playerControl = player1;
  this.deck = [
    card1 = new Card('Superman', 6, 9, 7),
    card2 = new Card('Scarlet Witch', 7, 10, 5),
    card3 = new Card('Black Widow', 8, 6, 9),
    card4 = new Card('The Flash', 7, 4, 10),
    card5 = new Card('Wonder Woman', 8, 7, 5),
    card6 = new Card('Batman', 10, 5, 6)
  ];

}

Game.prototype.dealCards = function() {

};


module.exports = Game;
