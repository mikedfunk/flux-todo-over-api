var React = require('react');
var TodoApp = React.createFactory(require('./TodoApp.jsx'));

React.render(
  TodoApp(),
  document.getElementById('app')

);
