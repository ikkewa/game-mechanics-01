'use strict';

/**
 * Menu State
 *
 * Give the user some intro, options and then
 * start the game on user interaction.
 */
function Menu() {
  // empty
}

Menu.prototype = {
  /**
   * Preload state of Menu
   *
   * Preload assets for the menu state from the cache.
   * All assets should be network loaded in the preload-state
   * and here we just pull the assets from the cache via
   * the cache-key.
   */
  preload: function preload() {
    // load sound for mouseover and click
    this.audioTick = this.add.audio('audio-menu-tick');
    this.audioSelect = this.add.audio('audio-menu-select');

    var cx = this.game.width / 2;
    var cy = this.game.height / 2;

    // create the play button
    this.btnPlay = this.add.button(
      cx - 64, cy - 16, // position: center-half of frame width
      'menu-btn-play', // cache key
       this.onPlayClick, this, // callback+scope on click
       2, 1, 0 // frames from the spritesheet: click, normal, over
     );

    this.btnPlay.onOverSound = this.audioTick;
    this.btnPlay.onDownSound = this.audioSelect;
  },

  /**
   * Callback called when clicked on play button
   */
  onPlayClick: function onPlayClick() {
    this.game.state.start('play');
  }
};

module.exports = Menu;
