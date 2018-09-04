const assert = require('assert');
const Game = require('../game.js')
const Player = require('../player.js')

let game;

beforeEach( function(){
  player1 = new Player('Ben');
  player2 = new Player('Simon');
  game = new Game(player1, player2);
})

describe("Game", function(){

  it("should have a player 1", function(){
    const actual = game.player1;
    assert.strictEqual(actual, player1)
  })

  it("should have a player 2", function(){
    const actual = game.player2;
    assert.strictEqual(actual, player2)
  })

  it("should have a player in control", function(){
    const actual = game.playerControl
    assert.strictEqual(actual, player1)
  })

  it("should have a deck with 6 cards", function(){
    const actual = game.deck.length;
    assert.strictEqual(actual, 6);
  })

  it("should deal the deck between the players", function(){
    game.dealCards;
    const actual1 = player1.cards.length;
    const actual2 = player2.cards.length;
    assert.strictEqual(actual1, 3);
    assert.strictEqual(actual2, 3);
  })

})
