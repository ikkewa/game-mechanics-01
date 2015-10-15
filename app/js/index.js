'use strict';

var bootState = require('./states/boot');
var preloadState = require('./states/preload');
var menuState = require('./states/menu');
var playState = require('./states/play');
var gameoverState = require('./states/gameover');

var game = new Phaser.Game(960, 640, Phaser.AUTO, 'gamecanvas');

game.state.add('boot', bootState);
game.state.add('preload', preloadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('gameover', gameoverState);

// boot the game directly
game.state.start('boot');
