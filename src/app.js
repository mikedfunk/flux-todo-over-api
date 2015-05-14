var React = require('react');
// var TodoApp = React.createFactory(require('./components/TodoApp.jsx'));
var TodoApp = require('./components/TodoApp.jsx');

React.render(
  React.createElement(TodoApp, {url: "http://jsonplaceholder.typicode.com/todos"}),
  document.getElementById('app')
);
