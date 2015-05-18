(function (module) {
  'use strict';

  /**
   * spec for TodoList.feature
   */
  var TodoListSpec = function () {
    // this.World = require('../support/world');

    this.Given(/^I am on the homepage$/, function (callback) {
      this.browser.get('http://flux-todo-over-api.local.dev');
      this.browser.getTitle().then(function (title) {
        this.expect(title).to.equal('Todos');
      }.bind(this));
    });

    // this.When(/^I enter some text in the new todo input$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.When(/^I save the todo$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^the new todo input should reset$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^I should see my new todo$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^the todo count should be (\d+) higher$/, function (arg1, callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.When(/^I click on the text of a todo$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^the todo text should be hidden$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^I should see an edit todo input instead$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^the edit input should have the todo text$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Given(/^I click on the text of a todo$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.When(/^I change the todo text$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.When(/^I submit the change$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^the edit box should be hidden$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^I should see the todo text instead$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.When(/^I click delete for a todo$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^I should see that todo disappear$/, function (callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });

    // this.Then(/^the todo count should be (\d+) lower$/, function (arg1, callback) {
      // // Write code here that turns the phrase above into concrete actions
      // callback.pending();
    // });
  };

  module.exports = TodoListSpec;
  
}(module));
