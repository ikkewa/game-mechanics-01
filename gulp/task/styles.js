var gulp = require('gulp');
var stylus = require('gulp-stylus');
var gulpif = require('gulp-if');
var csso = require('gulp-csso');
var nib = require('nib');

var config = require('../config').styles;

/**
 * Task: Stylus
 * Convert the stylus definition with stylus and nib
 * to css. If deployment environment is set, there is
 * also `csso` (CSS Optimization) applied.
 */
gulp.task('styles', function() {
  return gulp
    .src(config.srcPath)
    .pipe(stylus({
      use: nib(),
      'include css': true
    }))
    .pipe(gulpif(global.isDeployment, csso()))
    .pipe(gulp.dest(
      global.isDeployment ? config.distPath : config.buildPath
    ));
});
