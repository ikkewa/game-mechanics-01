
var gulp = require('gulp');

/**
 * Task: setDevelopment
 * Sets the environment to development
 */
gulp.task('setDevelopment', function() {
  global.isDevelopment = true;
});

/**
 * Task: setDeployment
 * Sets the environment to production
 */
gulp.task('setDeployment', function() {
  global.isDeployment = true;
  process.env.NODE_ENV = 'production';
});

