var React = require('react');
var TodoList = React.createClass({
handleClick: function () {
  // tell the parent to update the json and send it to the api
  // cross out the item
  console.log('click');
},
  render: function () {
    var data = this.props.data.map(function (todo) {
      return(
        <li ref={todo.title} onClick={this.handleClick}>{todo.title}</li>
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
