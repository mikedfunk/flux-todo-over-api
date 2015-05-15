var React = require('react');
var Todo = require('./Todo.jsx!');

var TodoList = React.createClass({
  render: function () {
    var todos = this.props.todos.map(function (todo) {
      return(
        <Todo todo={todo} />
      )
    });
    return(
      <ul>{todos}</ul>
    );
  }
});

module.exports = TodoList;
