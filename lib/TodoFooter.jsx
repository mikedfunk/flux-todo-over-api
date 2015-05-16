var React = require('react');

var TodoFooter = React.createClass({
  render: function () {
    return(
<footer><hr />{this.props.todos.length} todos left. Click a title to edit.</footer>
    );
  }
});

module.exports = TodoFooter;
