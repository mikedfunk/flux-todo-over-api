(function() {
  'use strict';

  // setup dependencies
  var gulp = require('gulp');
  var reactify = require('reactify');
  var browserify = require('browserify');
  var source = require('vinyl-source-stream');
  var browsersync = require('browser-sync').create();
  var reload = browsersync.reload;

  // setup paths for input/output of files
  var paths = {
    "app": "src/app.js",
    "appOutput": "app.min.js",
    "jsx": "src/*.jsx",
    "dest": "public/build/",
    "html": "public/*.html"
  };

  gulp.task('browsersyncSetup', function () {
    browsersync.init({
      server: {
        baseDir: "./public/"
      }
    });
  });

  /**
   * reload the page when the html changes
   */
  gulp.task('htmlWatch', function () {
    gulp.watch(paths.html, function () {
      reload();
    });
  });

  /**
   * recompiles the app
   */
  var appTask = function () {
    return browserify({
      "entries": paths.app, "transform": [reactify], "debug": true
    })
    .bundle()
    .pipe(source(paths.appOutput))
    .pipe(gulp.dest(paths.dest))
    .pipe(reload({stream: true}));
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

  gulp.task('watch', ['appWatch', 'jsxWatch', 'browsersyncSetup', 'htmlWatch']);
  gulp.task('default', ['watch']);
}());
