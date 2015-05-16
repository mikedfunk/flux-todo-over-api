(function () {
  'use strict';
  var React = require('react');
  var $ = require('jquery');
  var TodoActions = require('./TodoActions');

  /**
   * an individual todo element. key is assigned when invoking this from a parent.
   */
  var Todo = React.createClass({
    // pass click of delete button to the action, which the store listens to
    handleDeleteClick: function (e) {
      e.preventDefault();
      TodoActions.deleteTodo(this.props.todo.id);
    },
    render: function () {
      return(
        <li>
          <a href="#" onClick={this.handleDeleteClick}>[Delete]</a>
          <span>{this.props.todo.title}</span>
        </li>
      );
    }
  });

  module.exports = Todo;
}());
