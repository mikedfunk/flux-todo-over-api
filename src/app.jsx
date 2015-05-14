var React = require('react');
// var TodoApp = React.createFactory(require('./TodoApp.jsx'));
var TodoApp = require('./TodoApp.jsx');

React.render(
  <TodoApp url="http://jsonplaceholder.typicode.com/todos" />,
  document.getElementById('app')

);
