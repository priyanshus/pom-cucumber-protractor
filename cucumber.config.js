'use strict';

exports.config = {
    chromeDriver: './node_modules/chromedriver/bin/chromedriver',

    directConnect: true,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './features/*.feature'
    ],

    capabilities: {
        browserName: 'firefox'
    },

    baseUrl: 'http://www.msnbc.com',

    allScriptsTimeout: 11000,

    // How long to wait for a page to load.
    getPageTimeout: 10000,

    params: {
        common: {
            buildIndex: '/',
            explicitTimeout: 2500,
            windowWidth: 1200,
            windowHeight: 1600,
            sleepTimeout: 2000,
            cucumberTimeout: 60000
        }
    },

    onPrepare: function () {
        browser.driver.manage().window()
            .setSize(browser.params.common.windowWidth, browser.params.common.windowHeight);
    },

    cucumberOpts: {
        require: './step-definitions/**/*.js',
        tags: '@regression',
        format: undefined,
        profile: false,
        'no-source': true
    }
};
