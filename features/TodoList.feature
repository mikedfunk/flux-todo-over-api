Feature: Todo list
  As a user
  I want to view and manage todos
  So I can maintain a list of things to do

  Scenario: Add todo
    Given I am on the homepage
    When I enter some text in the new todo input
    And I save the todo
    Then the new todo input should reset
    And I should see my new todo
    And the todo count should be 1 higher

