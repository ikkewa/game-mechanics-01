'use strict';

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

    this.platform = this.game.add.sprite(0, this.game.height / 2, 'block-black');
    this.pole1 = this.game.add.sprite(200, this.game.height / 2, 'block-blue');
    this.pole2 = this.game.add.sprite(350, this.game.height / 2, 'block-blue');
    this.pole3 = this.game.add.sprite(500, this.game.height / 2, 'block-blue');
    this.player = this.game.add.sprite(64, this.game.height / 2 - 32, 'block-red');

    this.platform.scale.x = this.game.width / 32;
    this.pole1.scale.y = 2;
    this.pole2.scale.y = 4;
    this.pole3.scale.y = 2.4;

    this.pole1.anchor.setTo(0, 1);
    this.pole2.anchor.setTo(0, 1);
    this.pole3.anchor.setTo(0, 1);

    // enable pyhsics for these objects
    this.game.physics.arcade.enable([
        this.platform, this.pole1, this.pole2, this.pole3, this.player]);

    // enable gravity, so that elements "fall down"
    this.physics.arcade.gravity.y = 2000;

    this.platform.body.immovable = true;
    this.platform.body.allowGravity = false;
    this.pole1.body.immovable = true;
    this.pole1.body.allowGravity = false;
    this.pole2.body.immovable = true;
    this.pole2.body.allowGravity = false;
    this.pole3.body.immovable = true;
    this.pole3.body.allowGravity = false;

    this.player.body.collideWorldBounds = true;
  },

  /**
   * Update function - called on every frame
   */
  update: function update() {
    // check physics between player and ground
    this.game.physics.arcade.collide(this.player, this.platform);
    this.game.physics.arcade.collide(this.player,
        [this.pole1, this.pole2, this.pole3]);

    var v = 300;

    if(this.cursors.left.isDown) {
      this.player.body.velocity.x = -v;
    } else if(this.cursors.right.isDown) {
      this.player.body.velocity.x = v;
    } else {
      this.player.body.velocity.x = 0;
    }

    var isOnGround = this.player.body.touching.down;
    if(isOnGround && this.cursors.up.isDown) {
      this.player.body.velocity.y = -v * 2;
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

