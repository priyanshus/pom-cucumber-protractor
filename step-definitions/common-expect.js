'use strict';

var chai           = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    chaiWebdriver  = require('chai-webdriver');

chai.use(chaiAsPromised);
chai.use(chaiWebdriver(browser));
module.exports = chai.expect;
