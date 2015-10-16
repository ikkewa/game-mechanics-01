'use strict';

function Player(game, xpos, ypos) {
  Phaser.Sprite.call(this, game, xpos, ypos, 'block-red');

  this.game = game;

  this.jumpVelocity = 600;
  this.moveVelocity = 300;


  this.game.physics.arcade.enable(this);
  this.body.collideWorldBounds = true;
  this.game.add.existing(this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

/**
 * Makes the player jump
 * Pass in the velocity value or use the default
 * value set on this player.
 *
 * @param {Number} val positiv number
 */
Player.prototype.jump = function jump(val) {
  val = (val || this.jumpVelocity);

  this.body.velocity.y = (val < 0 ? val : -val);
};

/**
 * Stop the player walking around
 *
 * Will set the velocity to 0
 */
Player.prototype.stopWalking = function stopMovement() {
  this.body.velocity.x = 0;
};


/**
 * Make the player go left
 * Pass in the value or use the default value
 * that is set to this class.
 *
 * @param {Number} val positiv number
 */
Player.prototype.goLeft = function goLeft(val) {
  val = (val || this.moveVelocity);
  this.body.velocity.x = -val;
};

/**
 * Make the player go right
 * Pass in the value or use the default value
 * that is set to this class.
 *
 * @param {Number} val positiv number
 */
Player.prototype.goRight = function goRight(val) {
  val = (val || this.moveVelocity);
  this.body.velocity.x = val;
};

/**
 * Check if the player is on ground, means check
 * if the player sprite is touching an physics
 * enabled other sprite
 *
 * @return {Boolean}
 */
Player.prototype.isOnGround = function isOnGround() {
  return this.body.touching.down;
};

module.exports = Player;
