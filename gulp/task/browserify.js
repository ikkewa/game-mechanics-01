
var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

var config = require('../config').browserify;

/**
 * Task: Browserify
 * Bundle the JS starting with the entrypoint (from config)
 * and all dependecies required in the entrypoint.
 *
 * If the `dist` task calls this browserify task, then
 * the JS is uglified.
 */
gulp.task('browserify', function() {
  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: false,
    entries: config.entryPoint
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(gulpif(global.isDeployment, uglify()))
      .pipe(gulp.dest(
        global.isDeployment ? config.distPath : config.buildPath
      ));
  };

  if(!global.isDeployment) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});
