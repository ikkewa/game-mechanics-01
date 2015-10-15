
var gulp = require('gulp');
var config = require('../config').copycss;

/**
 * Task: Copy CSS
 * Copy any css files that are places in the configured source
 * directory. This will not copy the generated css from the
 * stylus task, as the stylus task will copy the css file to
 * the destination folder.
 */
gulp.task('copycss', function() {
  if(global.isDeployment) {
    return;
  }
  return gulp
    .src(config.srcPath)
    .pipe(gulp.dest(
      global.isDeployment ? config.distPath : config.buildPath
    ));
});
