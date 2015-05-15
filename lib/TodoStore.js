var Reflux = require('reflux');
var TodoActions = require('./TodoActions');

var TodoStore = Reflux.createStore({
  listenables: [TodoActions],
  onEditItem: function (itemKey, newLabel) {
    // do something...
  }
});

module.exports = TodoStore;
