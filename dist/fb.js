"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by danny_mcwaves on 3/5/17.
 */

// this is the facebook script.

var fb = require("fbgraph"),
    accessToken = "EAAFjaC5NXrQBAK0VjJmEeYFERtEZCY2PAQn3POuQctT2Q73OBOpwgmQldwfOy4fNByZBdSfva7OZBV2Cw03u8QZCrkmKmDVYQ72a9OGotdIuiDPbaM2YsxsSEDqlsz11Bv8SvUzJza4HSfpEBFrCwnXuzBr6agMiWwOSyRzO9AZDZD",
    id = "165987650576972";

fb.setAccessToken(accessToken);

var Facebook = function Facebook(obj) {
    "use strict";

    fb.post(id+"/photos", {
        url: obj.url,
        caption: obj.title + " #REVELATOR #horrorfilm #horror #indiefilm #film #movie #trailer #SupportIndieFilm #ComingSoon #horrormovies #horrormovie #staytuned #ghost #creepy #spooky #boo #halloween #streaming #cinema #filmmaking #itunes #netflix #follow #rt"
    }, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
};

exports.default = Facebook;
