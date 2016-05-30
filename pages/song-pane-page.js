'use strict';

var SongPanePage = function () {};

SongPanePage.prototype = Object.create({}, {
    plusIcon: {
        value: '.icon-plus',
        writable: false
    },

    moreIcon: {
        value: '.icon-plus',
        writable: false
    },

    openNewSongPage: {
        value: function () {
            var plusIconElement = element(by.css(this.plusIcon));

            return plusIconElement.click();
        }
    }
});

module.exports = SongPanePage;
