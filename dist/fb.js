"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by danny_mcwaves on 3/5/17.
 */

// this is the facebook script.

var fb = require("fbgraph"),
    accessToken = "EAAFjaC5NXrQBAEqGNZBrFe5kbrpQ3QbGD2qGMGder5QX1ZCcEO2KCcfhUjnZBjsONrGQnsb7f8F4edNBcAPVDl0VJo9Gwx7mrf8ATW3kM4GZCScZAw333uwaoPXf76m1qcQOZALnOJBYKQ237pvOL1ij45beNnDvp9idsBtbF5ZBdNxmBvXB34OR0ppZC40ipZAWdTjAX8wDlUAZDZD",
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
