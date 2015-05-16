(function () {
  'use strict';
  var React = require('react');
  var TodoActions = require('./TodoActions');

  /**
   * form to create a new todo
   */
  var TodoForm = React.createClass({
    handleSubmit: function (e) {
      e.preventDefault();
      // let TodoActions dictate the rest, then empty the input for the next todo
      var newTodoInput = React.findDOMNode(this.refs.newTodoInput);
      var todoText = newTodoInput.value;
      TodoActions.createTodo(todoText);
      newTodoInput.value = '';
    },
    render: function () {
      return(
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="newTodoInput" placeholder="Add a todo" />
        </form>
      );
    }
  });

  module.exports = TodoForm;
}());
