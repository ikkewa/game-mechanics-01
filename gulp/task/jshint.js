
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config').jshint;

/**
 * Task: JSHint
 * Run jshint to validate the js files.
 * JSHint will look for invalid or bad js code and warn
 * when something is deteceted (or even stop the gulp process).
 */
gulp.task('jshint', function() {
  return gulp
    .src(config.srcPath)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});
