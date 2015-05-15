var React = require('react');
var TodoActions = require('./TodoActions');
// call TodoActions.whateverAction() in app below
var TodoList = require('./TodoList.jsx!');
var TodoFooter = require('./TodoFooter.jsx!');

var TodoApp = React.createClass({
  render: function () {
    return(
      <div>
        <h1>Todos</h1>
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
});

module.exports = TodoApp;
