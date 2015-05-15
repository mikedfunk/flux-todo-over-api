// @link https://github.com/spoike/refluxjs#creating-actions
var Reflux = require('reflux');
var TodoActions = Reflux.createActions([
  "load",
  "deleteTodo"
]);

module.exports = TodoActions;
