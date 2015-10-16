'use strict';

var Pole = require('../prefabs/pole');
var Platform = require('../prefabs/platform');
var Player = require('../prefabs/player');

/**
 * Play state - the actual game
 */
function Play() {
}

Play.prototype = {
  /**
   * Preload the game
  */
  preload: function preload() {
    // prevent window jumping, by binding the keys that
    // trigger the browser to scroll
    this.input.keyboard.addKeyCapture([
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN,
      Phaser.Keyboard.SPACEBAR
    ]);

    // if arrow keys needed, use `createCursorKeys`
    this.cursors = this.input.keyboard.createCursorKeys();

    // enable advance (precission) timing
    this.game.time.advancedTiming = true;
  },

  /**
   * Create the game instance that makes a 
   * level playable. Constructs the entities and
   * the basic logic that is needed
   */
  create: function create() {
    this.stage.setBackgroundColor(0xffffff);  // set backgroundcolor of stage (white)
    var centerY = this.game.height / 2;

    this.platform = new Platform(this.game, 0, centerY, this.game.width / 32);
    this.player = new Player(this.game, 64, centerY - 32);
    this.pole1 = new Pole(this.game, 200, centerY, 2);
    this.pole2 = new Pole(this.game, 350, centerY, 4);
    this.pole3 = new Pole(this.game, 500, centerY, 2.4);

    // enable gravity, so that elements "fall down"
    this.physics.arcade.gravity.y = 2000;
  },

  /**
   * Update function - called on every frame
   */
  update: function update() {
    // check physics between player and ground
    this.game.physics.arcade.collide(this.player, this.platform);
    this.game.physics.arcade.collide(this.player,
        [this.pole1, this.pole2, this.pole3]);

    if(this.cursors.left.isDown) {
      this.player.goLeft();
    } else if(this.cursors.right.isDown) {
      this.player.goRight();
    } else {
      this.player.stopWalking();
    }

    if(this.player.isOnGround() && this.cursors.up.isDown) {
      this.player.jump();
    }
  },

  /**
   * Render function, mostly used for debugging
   */
  render: function render() {
    // example: debug a sprite object when physics are enabled
    //  this.game.debug.body(this.player);
  },
};

module.exports = Play;

