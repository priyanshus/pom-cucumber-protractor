'use strict';

module.exports = function () {
    /**
     * Default timeout value for cucumber world methods
     */
    this.setDefaultTimeout(browser.params.common.cucumberTimeout);

    /**
     * Before hook, it will get executed before each scenario
     */
    this.Before(function (done) {
        browser.get(browser.baseUrl + browser.params.common.buildIndex)
            .then(done);
    });
};
