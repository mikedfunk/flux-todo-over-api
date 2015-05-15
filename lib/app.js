var TodoApp = require('./TodoApp.jsx');
var React = require('react');

React.render(
  React.createElement(TodoApp, {url: "http://jsonplaceholder.typicode.com/todos"}),
  document.getElementById('app')
);
