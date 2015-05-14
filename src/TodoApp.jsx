var React = require('react');
var TodoList = require('./TodoList.jsx');
var $ = require('jquery');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {data: []};
  },
  componentDidMount: function () {
    $.get(this.props.url, function (data) {
      this.setState({data: data});
    }.bind(this));
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
