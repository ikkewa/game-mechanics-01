'use strict';

// define general path, which are used in the config
var buildPath = './build/';
var distPath = './dist/';
var appPath = './app/';
var assetsPath = './assets/';

module.exports = {
  // export the general paths
  appPath: appPath,
  buildPath: buildPath,
  distPath: distPath,

  /**
   * Configure the distribution ready path
   */
  dist: {
    srcPath: buildPath + 'index.html',
    distPath: distPath
  },

  /**
   * Configure the clean up parameters
   * which are used when the gulp task
   * for build and dist is called
   */
  clean: {
    srcPath: [
      distPath + '*',
      buildPath + '*'
    ]
  },

  /**
   * Configure the paths for stylus to generate
   * the stylesheet used in the index.html file
   */
  styles: {
    srcPath: appPath + 'stylesheets/style.styl',
    watchPath: appPath + 'stylesheets/**/*.styl',
    buildPath: buildPath + 'css',
    distPath: distPath + 'css',
  },

  /**
   * Configure the html markup generation with Jade.
   */
  markup: {
    srcPath: [
      appPath + '*.jade'
    ],
    watchPath: appPath + '**/*.jade',
    buildPath: buildPath,
    distPath: distPath
  },

  /**
   * Configure the image copy task.
   * This is not the game asset images, rather
   * than the HTML images used on the page
   * to show around the game (if needed)
   */
  images: {
    srcPath: appPath + 'images/**/*.png',
    buildPath: buildPath + 'images',
    distPath: distPath + 'images'
  },

  /**
   * Validate any JS files in the app folder
   * This will give you hints for wrong or bad
   * usage of JS and prevent you from debugging
   * simply errors in your code.
   */
  jshint: {
    srcPath: [
      appPath + '**/*.js'
    ]
  },

  /**
   * Copy all the needed JS for the development
   * and distribution context.
   * This will copy the files and not bundle
   * the JS with browserify, so the files need
   * to be included in html by the developer.
   */
  copyjs: {
    srcPathBuild: [
      assetsPath + 'js/devreload.js',
      'node_modules/phaser/dist/phaser.js'
    ],
    srcPathDist: [
      'node_modules/phaser/dist/phaser.min.js'
    ],
    buildPath: buildPath + 'js',
    distPath: distPath + 'js'
  },

  /**
   * Copy any additional CSS files from
   * a source folder and then include them
   * in the HTML file. The stylus file is
   * copied to the destination by the stylus
   * task itself, this is for extra css libraries
   * or files.
   */
  copycss: {
    srcPath: [],
    buildPath: buildPath + 'css/',
    distPath: distPath + 'css/'
  },

  /**
   * Copy all relevant assets that is used or needed
   * by the game and it is performing plain copy operation.
   * To keep the structure in the destination folder,
   * the subfolders like images, audio, maps are created
   * in the destination folder.
   * The assets/designs folder is not listed, as there
   * should be only the original Gimp/Inkscape/Images.
   */
  copyassets: {
    srcPath: [
      assetsPath + 'images/*.png',
      assetsPath + 'tilemaps/*.json',
      assetsPath + 'audio/*.{mp3,ogg}',
    ],
    buildPath: buildPath + 'assets/',
    distPath: distPath + 'assets/'
  },

  /**
   * Bundle the JS files
   * Beginning from the entrypoint browserify will
   * pack all included js (via require()) into one
   * file and perform optimization.
   */
  browserify: {
    entryPoint: appPath + 'js/index.js',
    buildPath: buildPath + 'js',
    distPath: distPath + 'js'
  }
};
