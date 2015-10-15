
var gulp = require('gulp');
var cache = require('gulp-cache');
var forEach = require('gulp-foreach');
var imagemin = require('gulp-imagemin');

var config = require('../config').copyassets;

/**
 * Task: CopyAssets
 * Copy the assets defined in the config.
 *
 * The Task will keep the subdirectory, if there is
 * any. Tha means: ./assets/images/img.png will be
 * copied to ./build/assets/images/img.png and so on.
 *
 * If the asset is an image, the image will be optimized
 * to reduce the size of the image.
 */
gulp.task('copyassets', function() {
  return gulp
    .src(config.srcPath)
    .pipe(forEach(function(stream, file) {
      var fname = file.path.replace(file.cwd, '')
                      .split('/').slice(2, -1).join('/');
      return gulp
        .src(file.path)
        .pipe(cache(imagemin({
          progressive: true,
          interlaced: true
        })))
        .pipe(gulp.dest(
          (global.isDeployment ? config.distPath : config.buildPath) + fname
        ));
    }));
});
