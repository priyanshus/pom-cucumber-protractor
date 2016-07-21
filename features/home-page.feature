
Feature:
    As an user I want see error message when I log into application with invalid login credentials
    As an user I want to perform search across the application

@login
Scenario: Login with invalid credentials
    Given I am on the democrats page
    When I click on follow democrats button
        And fill the wrong credentials for login
    Then There should be a error message for wrong login credentials

@regression
Scenario: Perform search across application
    Given I am on the democrats page
    When I type "Obama" in search engine
    Then I should see auto suggestion list having texts "Obama"
    When I select suggestion 1 from the auto suggested list
    Then The search page should get displayed to me
        And There should be some videos on the page
