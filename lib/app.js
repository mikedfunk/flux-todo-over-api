var TodoApp = require('./TodoApp.jsx!');
var React = require('react');

React.render(
  React.createElement(TodoApp, {url: "http://localhost:3000/todos"}),
  document.getElementById('app')
);
