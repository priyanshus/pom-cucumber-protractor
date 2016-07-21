'use strict';

var HomePage = require('../pages/home-page'),
    homePage = new HomePage(),
    expect = require('./common-expect');

module.exports = function () {
    this.Given (/^I am on the democrats page$/, function (done) {
        homePage.openExploreToggleNavigation()
            .then(function () {
                done();
            });
    });

    this.When (/^I click on follow democrats button$/, function (done) {
        homePage.openFollowPage()
            .then(function () {
                done();
            });
    });

    this.When(/^I type "([^"]*)" in search engine$/, function (searchString, done) {
        homePage.enterSearchStringSiteSearch(searchString)
            .then(function () {
                done();
            });
    });

    this.Then (/^I should see auto suggestion list having texts "([^"]*)"$/, function (searchString, done) {
        expect(homePage.autoSuggestionList).dom.to.contain.text(searchString)
            .then(function () {
                done();
            });
    });

    this.When(/^I select suggestion (\d+) from the auto suggested list$/, function (number, done) {
         homePage.selectAutoSuggestion(number)
            .then(function () {
                done();
            });
    });
};
