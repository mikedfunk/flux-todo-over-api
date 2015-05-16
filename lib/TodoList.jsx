(function () {
  'use strict';
  var React = require('react');
  var Todo = require('./Todo.jsx!');

  /**
   * display all todos
   */
  var TodoList = React.createClass({
    render: function () {
      // create an array of react elements for each todo item. React is smart
      // enough to display those in order below.
      var todos = this.props.todos.map(function (todo) {
        return(
          <Todo todo={todo} key={todo.id} />
        );
      });
      return(
        <ul className="no-bullet">{todos}</ul>
      );
    }
  });

  module.exports = TodoList;
}());
