(function () {
  'use strict';
  var _ = require('lodash');

  var TodoConstants = {
    LIST_URL: 'http://localhost:3000/todos',
    // set up a lodash template so we can replace the id
    DELETE_URL_TEMPLATE: _.template('http://localhost:3000/todos/<%= id %>')
  };

  module.exports = TodoConstants;
}());
