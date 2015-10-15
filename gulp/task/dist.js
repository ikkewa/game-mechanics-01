var gulp = require('gulp');
var useref = require('gulp-useref');

var config = require('../config').dist;

/**
 * Task: Dist
 * The task will set the environment to deployment
 * and the runs the build task. The deployment task
 * will say the gulp system to use the `distPath`
 * settings from the config.
 */
gulp.task('dist', ['setDeployment', 'build']);
