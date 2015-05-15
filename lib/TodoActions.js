(function () {
  'use strict';
  // @link https://github.com/spoike/refluxjs#creating-actions
  var Reflux = require('reflux');

  // this is half of the reflux magic. listenable actions are listened to by
  // the store, then the component connects to the store
  var TodoActions = Reflux.createActions([
    "load",
    "deleteTodo"
  ]);

  module.exports = TodoActions;
}());
