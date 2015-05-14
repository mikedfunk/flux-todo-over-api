var React = require('react');
var TodoList = React.createClass({
  render: function () {
    var data = this.props.data.map(function (todo) {
      return(
        <li>{todo.title}</li>
      );
    });
    return(
<ul>
  {data}
</ul>
    );
  }
});
module.exports = TodoList;
