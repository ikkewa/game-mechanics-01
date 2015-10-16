'use strict';

/**
 * Preload state
 *
 * Preloader for the game to load all kind of
 * assets and lastly start the menu state
 */
function Preload() {
  // empty
}

Preload.prototype = {
  /**
   * Preload the preload state
   *
   * In the preload state all assets are loaded
   * via the `this.load` reference to Phaser.Loader.
   *
   * The visually indicate for the use the loading,
   * setup the preloadSprite system.
   */
  preload: function preload() {
    var cx = this.game.width / 2;
    var cy = this.game.height / 2;

    this.loadBackground = this.game.add.sprite(cx - 100, cy - 30, 'preload-bg');
    this.loadBar = this.game.add.sprite(cx - 100, cy - 30, 'preload-fg');

    this.load.setPreloadSprite(this.loadBar);

    // load the assets via `this.load.*` methods
    // examples:
    //  this.load.image('cache-key-image', 'assets/images/image-name.png');
    //  this.load.spritesheet('cache-key-spritesheet',
    //                        'assets/images/spritesheet-name.png');
    //  this.load.atlas('cache-key-atlas', 'assets/json/atlas-name.json');
    //  this.load.tilemap('cache-key-tilemap',
    //                    'assets/json/tilemap-name.json',
    //                    Phaser.Tilemap.TILED_JSON);
    //  this.load.audio('cache-key-audio', 'assets/audio/sound.mp3');

    // load the play button spritesheet
    this.load.spritesheet(
      'menu-btn-play',
      'assets/images/menu-btn-play.png',
      128, 32  // width+height of each frame
    );
    // load the audio for the menu
    this.load.audio('audio-menu-tick', 'assets/audio/menu-tick.mp3');
    this.load.audio('audio-menu-select', 'assets/audio/menu-select.mp3');


    //******
    // Load the 3 quadratic 32x32 images
    // this.load.image('image-key', 'path-to-image-on-server');
    //******
    this.load.image('block-black', 'assets/images/sprite_blackblock.png');
    this.load.image('block-blue', 'assets/images/sprite_blueblock.png');
    this.load.image('block-red', 'assets/images/sprite_redblock.png');

  },

  /**
   * Create the preload state
   *
   * When the `create` method is called, then the preload
   * of assets has been done and we can jump over
   * to the `play` state.
   */
  create: function create() {
    this.state.start('play');
  }
};

module.exports = Preload;
