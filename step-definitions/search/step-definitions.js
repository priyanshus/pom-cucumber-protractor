'use strict';

var SearchResultPage = require('../../pages/search/search-result-page'),
    expect = require('../common-expect'),
    searchResultPage = new SearchResultPage();

module.exports = function () {
    this.Then(/^The search page should get displayed to me$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback(null, 'pending');
   });

   this.Then(/^There should be some videos on the page$/, function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback(null, 'pending');
   });
};
