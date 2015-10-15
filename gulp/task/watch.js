
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var debounce = require('debounce');
var config = require('../config');

/**
 * Task: Watch
 * The watch task will look for changes in files
 * and then run the explicit task to update the
 * changed files to the build folder.
 * After all changes have been applied to the build
 * folder, the `livedebounce` module will reload
 * the browser window (if livedebounce is included in 
 * the html file with `assets/js/devreload.js`.
 */
gulp.task('watch', ['build', 'serve'], function() {
  livereload.listen(35729);
  var livedebounce = debounce(livereload.reload, 500);

  gulp.watch(config.copyassets.srcPath, ['copyassets', livedebounce]);
  gulp.watch(config.styles.watchPath, ['styles', livedebounce]);
  gulp.watch(config.markup.watchPath, ['markup', livedebounce]);
  gulp.watch(config.images.srcPath, ['images', livedebounce]);
  gulp.watch(config.copyjs.srcPath, ['jshint', 'copyjs', livedebounce]);
  gulp.watch(config.jshint.srcPath, ['jshint', 'browserify', 'copyjs', livedebounce]);
});
