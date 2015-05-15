var Reflux = require('reflux');
var TodoActions = require('./TodoActions');

var TodoStore = Reflux.createStore({
  // this assigns matching onWhatever methods with the actions array so that
  // when something calls TodoActions.whatever the listener triggers and fires
  // onWhatever() here.
  listenables: [TodoActions],
  getInitialState: function () {
    // this goes into {todos: HERE} in the store state
    return [];
  },
  /**
   * hooked into "load" action in TodoActions
   * @param {object} todos
   */
  onLoad: function (todos) {
    console.log("load called", todos);
    this.trigger(todos);
  }
});

module.exports = TodoStore;
