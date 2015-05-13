(function() {
  'use strict';
  var gulp = require('gulp');
  var reactify = require('reactify');
  var browserify = require('browserify');
  var watchify = require('watchify');
  var source = require('vinyl-source-stream');

  var paths = {
    "app": "src/app.js",
    "react": "src/react/*.react.js",
    "dest": "public/build/"
  };

  gulp.task('app', function () {
    var watcher = watchify(browserify({
      "entries": paths.app, "transform": [reactify], "debug": true
    }));

    return watcher.on('update', function () {
      watcher.bundle().pipe(source(paths.app)).pipe(gulp.dest(paths.dest));
    })
    .bundle().pipe(source(paths.app)).pipe(gulp.dest(paths.dest));
  });

  gulp.task('watch', ['app']);
  gulp.task('default', ['watch']);
}());
