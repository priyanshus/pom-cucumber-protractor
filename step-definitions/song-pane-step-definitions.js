'use strict';

var SongPanePage = require('../pages/song-pane-page'),
    songPanePage = new SongPanePage();

module.exports = function () {
    this.Given (/^I am on the home page$/, function (done) {
        songPanePage.openNewSongPage()
            .then(done);
    });

    this.When (/^I open add new song page$/, function () {
    });

    this.Then (/^It should open the form to add new song$/, function () {
    });
};
