(function (require, console, module) {
  var Reflux = require('reflux');
  var TodoActions = require('./TodoActions');
  var TodoConstants = require('./TodoConstants');
  var _ = require('lodash');
  var $ = require('jquery');

  /**
   * reflux store (like a model) for todos
   */
  var TodoStore = Reflux.createStore({
    // this assigns matching onWhatever methods with the actions array so that
    // when something calls TodoActions.whatever the listener triggers and fires
    // onWhatever() here.
    listenables: [TodoActions],
    getInitialState: function () {
      // this.todos is intentionally not defined. It's "private"
      this.todos = [];
      // this goes into {todos: HERE} in the store state
      return this.todos;
    },
    /**
     * the key is the id in the json for this todo. item is found by filtering
     * with lodash.
     * @param {int} key
     */
    onDeleteTodo: function (key) {
      var newTodos= _.filter(this.todos, function (todo) {
        return todo.id !== key;
      });
      $.ajax({
        // use lodash templating to set the id
        url: TodoConstants.DELETE_URL_TEMPLATE({id: key}),
        type: 'DELETE'
      })
      .then(function () {
        TodoActions.deleteTodoCompleted(newTodos);
      })
      // jquery has no .catch()
      .then(null, TodoActions.deleteTodoFailed);
    },
    /**
     * on successful ajax delete todo
     * @param {array} newTodos the updated list of todos
     */
    onDeleteTodoCompleted: function (newTodos) {
      this.updateTodos(newTodos);
    },
    /**
     * on ajax unsuccessful response deleting a todo
     * @param {string} data the response from the server
     */
    onDeleteTodoFailed: function (data) {
      console.log('delete todo failed! response:', data);
    },
    /**
     * call update todos with the new one tacked on
     * @param {string} todoText
     */
    onCreateTodo: function (todoText) {
      var newTodos = this.todos;
      // just use the count for ids. this would be better done on the server side.
      var id = this.todos.length + 1;
      var newTodo = {id: id, title: todoText};
      // tell the api to add this todo
      $.ajax({
        url: TodoConstants.CREATE_URL,
        type: 'POST',
        data: newTodo
      })
      .then(function () {
        // when it succeeds, update the ui
        TodoActions.createTodoCompleted(newTodo, newTodos);
      })
      .then(null, TodoActions.createTodoFailed);
    },
    /**
     * when the ajax request to create a todo is successful
     * @param {object} newTodo this todo with a title and id
     * @param {array} newTodos updated list of todos
     */
    onCreateTodoCompleted: function (newTodo, newTodos) {
      newTodos.push(newTodo);
      this.updateTodos(newTodos);
    },
    /**
     * when the ajax request to create a todo fails
     * @param {string} data the response from the server
     */
    onCreateTodoFailed: function (data) {
      console.log('Create todo failed! Response:', data);
    },
    /**
     * edit a todo, send the api call, and update the ui
     * @param {int} todoId
     * @param {string} todoText
     */
    onEditTodo: function (todoId, todoText) {
      $.ajax({
        url: TodoConstants.EDIT_URL_TEMPLATE({id: todoId}),
        type: 'PUT',
        data: {id: todoId, title: todoText}
      })
      .then(function () {
        TodoActions.editTodoCompleted(todoId, todoText);
      })
      // jquery has no .catch()
      .then(null, TodoActions.editTodoFailed);
    },
    /**
     * on success for ajax PUT for edit todo
     * @param {int} todoId
     * @param {string} todoText the updated text
     */
    onEditTodoCompleted: function (todoId, todoText) {
      var newTodos = this.todos;
      for (var i in newTodos) {
        if (newTodos[i].id === todoId) {
          newTodos[i].title = todoText;
        }
      }
      this.updateTodos(newTodos);
    },
    /**
     * when the ajax request to edit a todo fails
     * @param {string} data the response from the ajax request
     */
    onEditTodoFailed: function (data) {
      console.log('Edit todo failed! Response:', data);
    },
    /**
     * update the todos stored
     * @param {array} newTodos
     */
    updateTodos: function (todos) {
      this.trigger(todos);
      this.todos = todos;
    },
    /**
     * set up a promise which calls onGetTodosCompleted when successful
     */
    onGetTodos: function () {
      $.get(TodoConstants.LIST_URL)
        .then(TodoActions.getTodosCompleted)
        // jquery promises don't have a .catch()??
        // @link https://forum.jquery.com/topic/adding-catch-method-to-jquery-deferred-promise
        .then(null, TodoActions.getTodosFailed);
    },
    /**
     * when getting all todos over ajax is successful
     * @param {array} data the response data from the ajax call
     */
    onGetTodosCompleted: function (data) {
      this.updateTodos(data);
    },
    /**
     * when getting all todos over ajax fails
     * @param {array} data the response from the ajax call
     */
    onGetTodosFailed: function (data) {
      console.error('Get todos failed. Is the api running?', data);
    }
  });

  module.exports = TodoStore;
}(require, console, module));
