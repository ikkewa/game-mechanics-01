
var gulp = require('gulp');
var del = require('del');
var config = require('../config').clean;

/**
 * Task: Clean
 * Clean up the paths defined in the config for this task
 */
gulp.task('clean', del.bind(null, config.srcPath, { dot: true}));
