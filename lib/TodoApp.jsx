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
    // this will cause setState({todos:newTodos}) locally
    // whenever the store does trigger(newTodos)
    // @link https://github.com/spoike/refluxjs#using-refluxconnect
    mixins: [Reflux.connect(TodoStore, "todos")],
    componentDidMount: function () {
      TodoActions.getTodos();
    },
    render: function () {
      return(
        <div className="large-12 columns">
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
