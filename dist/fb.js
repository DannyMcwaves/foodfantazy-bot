"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by danny_mcwaves on 3/5/17.
 */

// this is the facebook script.

var fb = require("fbgraph"),
    accessToken = "EAADgche8ZAXYBAHdIx3VSD9C86E9NnvzSSXrgWrjhSx3Iid2Ww0QTXzwsxl3H2ftSg6EpqmDrgaial6ZCRL57rC9NTNFCZC7QJloA5HTzUZCZCN1zmpl9BYsdDgJHh2x7cxr85qWCECIropZCaoE5PC2I1TT9y7ZCgZD",
    id = "246780629116278";

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
