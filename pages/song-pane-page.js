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

            return plusIconElement.getText()
            .then(function (text) {
                console.log('Printing text');
                console.log(text);
            });
            //return plusIconElement.click();
        }
    },

    getTitle: {
        value: function () {
            browser.getTitle()
                .then(function (title) {
                    console.log('Printing title...');
                    console.log(title);
                });
        }
    }
});

module.exports = SongPanePage;
