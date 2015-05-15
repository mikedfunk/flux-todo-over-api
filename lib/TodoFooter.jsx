var React = require('react');

var TodoFooter = React.createClass({
  render: function () {
    return(
      <footer>{this.props.todos.length} todos left</footer>
    );
  }
});

module.exports = TodoFooter;
