@regression
Feature: Add Song
  As an user I want to add a new song

  Scenario: Add Song
    Given I am on the home page
    When I open add new song page
    Then It should open the form to add new song
