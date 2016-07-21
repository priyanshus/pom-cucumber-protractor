'use strict';

var LoginPage = require('../../pages/login/login-page'),
    loginPage = new LoginPage(),
    expect = require('../common-expect');

module.exports = function () {
    this.When (/^fill the wrong credentials for login$/, function (done) {
        loginPage.login('protractor@example.com', 'password')
            .then(function () {
                done();
            });
    });

    this.Then(/^There should be a error message for wrong login credentials$/, function (done) {
        expect(loginPage.wrongPasswordErrorText).dom.to.be.visible()
            .then(function () {
                done();
            });
    });
};
