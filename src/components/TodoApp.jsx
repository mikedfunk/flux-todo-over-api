var React = require('react');
var TodoList = require('./TodoList.jsx');
var TodoStore = require('../stores/TodoStore.jsx');
var TodoActions = require('../actions.TodoActions.jsx');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      list: TodoStore.getList()
    }
  },
  componentDidMount: function () {
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    TodoStore.removeChangeListener(this._onChange);
  },
  handleAddTodo: function (newTodo) {
    TodoActions.addItem(newTodo);
  },
  handleRemoveTodo: function (index) {
    TodoActions.removeItem(index);
  },
  _onChange: function () {
    this.setState({
      list: TodoStore.getList()
    });
  },
  render: function () {
    return(
      <div>
        <h1>Todos</h1>
        <TodoList data={this.state.data} />
      </div>
    );
  }
});
module.exports = TodoApp;
