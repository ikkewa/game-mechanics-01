
var gulp = require('gulp');
var config = require('../config').copyjs;

/**
 * Task: CopyJs
 * Copy js files that are defined in the source directory
 * in the config file. this will not copy the js files in the
 * app/js directory, as all js files will and should be copied
 * via the browserify task to the destination folder.
 */
gulp.task('copyjs', function() {
  return gulp
    .src(
      global.isDeployment ? config.srcPathDist : config.srcPathBuild
    )
    .pipe(gulp.dest(
      global.isDeployment ? config.distPath : config.buildPath
    ));
});
