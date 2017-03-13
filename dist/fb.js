"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by danny_mcwaves on 3/5/17.
 */

// this is the facebook script.

var fb = require("fbgraph"),
    accessToken = "EAADgche8ZAXYBADlmFQKG49aA82hmmlka6SEVdFOYR0xHZBvYHJSNaDd1KHm7BgISRMMAPqpZCsuxSXejhXQAF3ZCciJZBzPd3NZCY3SAuod3nJL8wxLZBcA0ZClQBNYjxIiUgQsiriE9Db1UkAyKNStaSd3rvD2Iv6OnilrECZAvdQZDZD",
    id = "246780629116278";

fb.setAccessToken(accessToken);

var Facebook = function Facebook(obj) {
    "use strict";

    fb.post("me/photos", {
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
