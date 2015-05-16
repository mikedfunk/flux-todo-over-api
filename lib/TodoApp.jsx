(function () {
  'use strict';
  var React = require('react');
  var TodoActions = require('./TodoActions');
  // call TodoActions.whateverAction() in app below
  var TodoForm = require('./TodoForm.jsx!');
  var TodoList = require('./TodoList.jsx!');
  var TodoFooter = require('./TodoFooter.jsx!');
  var TodoStore = require('./TodoStore');
  var TodoConstants = require('./TodoConstants');
  var Reflux = require('reflux');
  var $ = require('jquery');

  var TodoApp = React.createClass({
    // the glue to listen to triggers of an updated todolist json object
    // this will cause setState({list:updatedlist}) locally
    // whenever the store does trigger(updatedlist)
    // @link https://github.com/spoike/refluxjs#using-refluxconnect
    mixins: [Reflux.connect(TodoStore, "todos")],
    componentDidMount: function () {
      $.get(TodoConstants.LIST_URL, function (data) {
        TodoActions.load(data);
      });
    },
    render: function () {
      return(
        <div>
          <h1>Todos</h1>
          <TodoForm />
          <TodoList todos={this.state.todos} />
          <TodoFooter todos={this.state.todos} />
        </div>
      );
    }
  });

  module.exports = TodoApp;
}());
