(function() {
  'use strict';
  var gulp = require('gulp');
  var reactify = require('reactify');
  var browserify = require('browserify');
  var watchify = require('watchify');
  var source = require('vinyl-source-stream');

  var paths = {
    "app": "src/app.js",
    "jsx": "src/*.jsx",
    "dest": "public/build/"
  };

  var appTask = function () {
    var watcher = watchify(browserify({
      "entries": paths.app, "transform": [reactify], "debug": true
    }));

    return watcher.on('update', function () {
      watcher.bundle().pipe(source(paths.app)).pipe(gulp.dest(paths.dest));
    })
    .bundle().pipe(source(paths.app)).pipe(gulp.dest(paths.dest));
  };

  gulp.task('jsx', function () {
    gulp.watch(paths.jsx, ['app']);
  });

  gulp.task('app', appTask);

  gulp.task('watch', ['app', 'jsx']);
  gulp.task('default', ['watch']);
}());
