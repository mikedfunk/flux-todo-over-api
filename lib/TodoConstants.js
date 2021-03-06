(function () {
  'use strict';
  var _ = require('lodash');

  /**
   * all app config vars
   */
  var TodoConstants = {
    LIST_URL: 'http://localhost:3000/todos',
    // set up a lodash template so we can replace the id
    // i know i could just append it but this was just for kicks
    DELETE_URL_TEMPLATE: _.template('http://localhost:3000/todos/<%= id %>'),
    EDIT_URL_TEMPLATE: _.template('http://localhost:3000/todos/<%= id %>'),
    CREATE_URL: 'http://localhost:3000/todos'
  };

  module.exports = TodoConstants;
}());
