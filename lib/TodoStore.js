(function () {
  var Reflux = require('reflux');
  var TodoActions = require('./TodoActions');
  var _ = require('lodash');
  var $ = require('jquery');

  var TodoStore = Reflux.createStore({
    todos: [],
    // this assigns matching onWhatever methods with the actions array so that
    // when something calls TodoActions.whatever the listener triggers and fires
    // onWhatever() here.
    listenables: [TodoActions],
    getInitialState: function () {
      // this goes into {todos: HERE} in the store state
      return [];
    },
    /**
     * hooked into "load" action in TodoActions
     * @param {object} todos
     */
    onLoad: function (todos) {
      this.updateTodos(todos);
    },
    /**
     * the key is the id in the json for this todo. item is found by filtering
     * with lodash.
     * @param {int} key
     */
    onDeleteTodo: function (key) {
      var newTodos= _.filter(this.todos, function (todo) {
        return todo.id !== key;
      });
      $.ajax({
        url: 'http://localhost:3000/todos/' + key,
        type: 'DELETE',
        success: function (data) {
          this.updateTodos(newTodos);
        }.bind(this)
      });
    },
    /**
     * update the todos stored
     * @param {array} newTodos
     */
    updateTodos: function (todos) {
      this.trigger(todos);
      this.todos = todos;
    }
  });

  module.exports = TodoStore;
}())
