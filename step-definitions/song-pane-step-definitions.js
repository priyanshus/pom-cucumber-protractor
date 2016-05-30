'use strict';

var SongPanePage = require('../pages/song-pane-page'),
    expect = require('./common-expect'),
    songPanePage = new SongPanePage();

module.exports = function () {
    this.Given (/^I am on the home page$/, function (done) {
        console.log('Landed on home page');
        done();
    });

    this.When (/^I open add new song page$/, function (done) {
        songPanePage.openNewSongPage()
        .then(done);
    });

    this.Then (/^It should open the form to add new song$/, function () {
        return expect(songPanePage.plusIcon).dom.not.to.have.text('');
    });
};
