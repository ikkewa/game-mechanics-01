'use strict';

function Pole(game, xpos, ypos, yscale) {
  Phaser.Sprite.call(this, game, xpos, ypos, 'block-blue');

  this.game = game;
  this.anchor.setTo(0, 1);
  this.scale.y = yscale;

  this.game.physics.arcade.enable(this);

  this.body.immovable = true;
  this.body.allowGravity = false;

  this.game.add.existing(this);
}

Pole.prototype = Object.create(Phaser.Sprite.prototype);
Pole.prototype.constructor = Pole;

module.exports = Pole; //commonJS!
