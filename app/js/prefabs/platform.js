'use strict';

function Platform(game, xpos, ypos, yscale) {
  Phaser.Sprite.call(this, game, xpos, ypos, 'block-black');

  this.game = game;
  this.scale.x = yscale;

  this.game.physics.arcade.enable(this);

  this.body.immovable = true;
  this.body.allowGravity = false;

  this.game.add.existing(this);
}

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.prototype.constructor = Platform;

module.exports = Platform;
