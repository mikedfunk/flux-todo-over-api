(function () {
  'use strict';
  // @link https://github.com/spoike/refluxjs#creating-actions
  var Reflux = require('reflux');

  // this is half of the reflux magic. listenable actions are listened to by
  // the store, then the component connects to the store to update any time
  // the store state changes
  var TodoActions = Reflux.createActions([
    "load",
    "deleteTodo",
    "deleteTodoCompleted",
    "deleteTodoFailed",
    "createTodo",
    "createTodoCompleted",
    "createTodoFailed",
    "editTodo",
    "editTodoCompleted",
    "editTodoFailed",
    "getTodos",
    "getTodosCompleted",
    "getTodosFailed"
  ]);

  module.exports = TodoActions;
}());
