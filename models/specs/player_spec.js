const assert = require('assert');
const Player = require('../player.js')

let player;

beforeEach( function(){
  player = new Player('Ben')
})

describe("Player", function(){

  it("should have a name", function(){
    const actual = player.name;
    assert.strictEqual(actual, 'Ben')
  })

  it("should have empty cards array", function(){
    const actual = player.cards;
    assert.deepStrictEqual(actual, [])
  })

})
