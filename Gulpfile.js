(function() {
  'use strict';

  // setup dependencies
  var gulp = require('gulp');
  var reactify = require('reactify');
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var rename = require('gulp-rename');

  // setup paths for input/output of files
  var paths = {
    "app": "src/app.jsx",
    "appFinal": "app.min.js",
    "jsx": "src/*.jsx",
    "dest": "public/build/",
    "html": "public/*.html"
  };

  /**
   * recompiles the app
   */
  var appTask = function () {
    return browserify({
      "entries": paths.app, "transform": [reactify], "debug": true
    })
    .bundle()
    .pipe(source(paths.app))
    .pipe(rename(paths.appFinal))
    .pipe(gulp.dest(paths.dest));
  };

  /**
   * recompile the app when jsx changes
   */
  gulp.task('jsxWatch', function () {
    gulp.watch(paths.jsx, appTask);
  });

  /**
   * recompile the app when the app file changes
   */
  gulp.task('appWatch', function () {
    gulp.watch(paths.app, appTask);
  });

  gulp.task('watch', ['appWatch', 'jsxWatch', 'htmlWatch']);
  gulp.task('default', ['watch']);
}());
