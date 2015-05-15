var React = require('react');

var Todo = React.createClass({
  render: function () {
    return(
      <li>{this.props.todo.title}</li>
    );
  }
});

module.exports = Todo;
