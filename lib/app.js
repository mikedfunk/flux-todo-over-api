(function () {
  'use strict';
  var TodoApp = require('./TodoApp.jsx!');
  var React = require('react');

  // this is what the jsx syntax compiles down to in vanilla javascript
  React.render(
    React.createElement(TodoApp, {url: "http://localhost:3000/todos"}),
    document.getElementById('app')
  );
}());
