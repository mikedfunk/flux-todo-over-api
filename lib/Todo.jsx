(function () {
  'use strict';
  var React = require('react');
  var $ = require('jquery');
  var TodoActions = require('./TodoActions');

  /**
   * an individual todo element. key is assigned when invoking this from a parent.
   */
  var Todo = React.createClass({
    /**
     * pass click of delete button to the action, which the store listens to
     * @param {object} event
     */
    handleDeleteClick: function (e) {
      e.preventDefault();
      TodoActions.deleteTodo(this.props.todo.id);
    },
    /**
     * when clicking a todo text to edit it
     * @param {object} event
     */
    handleEditClick: function (e) {
      e.preventDefault();
      var $item = $(e.target);
      $item.hide().siblings('.todo-edit-input').show();
    },
    /**
     * when they change a todo item
     * @param {object} event
     */
    handleEditSubmit: function (e) {
      e.preventDefault();
      // get the value of the input in this form and let TodoActions take it 
      // from there
      var todoEditInput = e.target.querySelector('.todo-edit-input');
      var todoText = todoEditInput.value;
      TodoActions.editTodo(this.props.todo.id, todoText);
      // TODO: use async actions to only do this after async update is complete
      $(todoEditInput).hide().siblings('.todo-text').show();
    },
    render: function () {
      return(
        <li>
          <form onSubmit={this.handleEditSubmit}>
            <a href="#" className="button alert tiny" onClick={this.handleDeleteClick}>Delete</a>{' '}
            <input type="text" name="title" className="todo-edit-input" style={{display: "none"}} defaultValue={this.props.todo.title} />
            <span className="todo-text" onClick={this.handleEditClick}>{this.props.todo.title}</span>
          </form>
        </li>
      );
    }
  });

  module.exports = Todo;
}());
