(function (module) {
  'use strict';

  // dependencies
  var webdriver = require('selenium-webdriver');
  var chai = require('chai');

  var World = function () {
    this.World = function (callback) {

      // set selenium as the browser driver
      this.browser = new webdriver.Builder().forBrowser('phantomjs').build();
      this.expect = chai.expect;

      // tell cucumber we're finished and to use "this" as the world instance
      callback();
    };
  };

  module.exports = World;
}(module));
