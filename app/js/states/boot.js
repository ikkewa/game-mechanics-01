'use strict';

/**
 * Game boot state
 *
 * Bring up all base settings for the phaser framework
 * and setup the next preload state.
 */
function Boot() {
  // empty, maybe inherit config file or something
}

Boot.prototype = {
  /**
   * Boot preload
   *
   * Load the images used in the preload state
   */
  preload: function preload() {
    this.load.image('preload-bg', 'assets/images/preloader_bg.png');
    this.load.image('preload-fg', 'assets/images/preloader_fg.png');
  },

  /**
   * Create the boot state
   *
   * Setup the game settings for phaser framework
   * and kick off the preload state
   */
  create: function create() {
    this.scale.windowConstraints.bottom = 'visual';
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = false;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.state.start('preload');
  }
};

module.exports = Boot;
