var React = require('react');
var $ = require('jquery');
var TodoActions = require('./TodoActions');

var Todo = React.createClass({
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
