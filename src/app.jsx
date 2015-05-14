var React = require('react');
// var TodoApp = React.createFactory(require('./TodoApp.jsx'));
var TodoApp = require('./TodoApp.jsx');

React.render(
  <TodoApp url="http://localhost:3100/todos" />,
  document.getElementById('app')

);
