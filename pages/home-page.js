'use strict';

var selectors = {
    exploreToggleNavigation: ".main-nav--toggle[data-ng-href*='explore']",
    democratesLink: "a[title='Democrats']",
    followButton: ".b-follow",
    siteSearchInputBox: '#site_search_text',
    autoSuggestionList: '.ui-menu-item > a'
},

    HomePage = function () {};

HomePage.prototype = Object.create({}, {
    autoSuggestionList : {
        value: selectors.autoSuggestionList,
        writable: false
    },

    openExploreToggleNavigation: {
        value: function () {
            var exploreToggleNavigationElement = element(by.css(selectors.exploreToggleNavigation)),
                democratesLinkElement = element(by.css(selectors.democratesLink));

            exploreToggleNavigationElement.click();
            return democratesLinkElement.click();
        }
    },

    openFollowPage: {
        value: function () {
            var followButtonElement = element(by.css(selectors.followButton));

            browser.sleep(browser.params.sleepTimeout);
            return followButtonElement.click();
        }
    },

    enterSearchStringSiteSearch: {
        value: function (searchString) {
            var siteSearchInputBoxElement = element(by.css(selectors.siteSearchInputBox));

            return siteSearchInputBoxElement.sendKeys(searchString);
        }
    },

    selectAutoSuggestion: {
        value: function (position) {
            var autoSuggestionListElement = element.all(by.css(this.autoSuggestionList)).get(position);

            return autoSuggestionListElement.click();
        }
    }
});

module.exports = HomePage;
