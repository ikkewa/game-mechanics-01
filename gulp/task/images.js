
var gulp = require('gulp');

var gulp = require('gulp');
var cache = require('gulp-cache');
var size = require('gulp-size');
var imagemin = require('gulp-imagemin');

var config = require('../config').images;

/**
 * Task: Images
 * Copy the client images to the destination folder
 * Run image optimization on the copied images.
 * This will not copy assets, as only images
 * for the html page (around the game).
 */
gulp.task('images', function() {
  return gulp
    .src(config.srcPath)
    .pipe(cache(imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(
      gulp.isDeployment ? config.distPath : config.buildPath
    ));
});
