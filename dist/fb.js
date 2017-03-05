"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by danny_mcwaves on 3/5/17.
 */

// this is the facebook script.

var fb = require("fbgraph"),
    accessToken = "EAAFjaC5NXrQBAC9NiauPPlCqPNAkNWt8qQykTheriK6gejGoOIVijjEiUviZA3HPT7Ei2uegrFqCWu7heZBKriPjkpOm2GndDs80iimmresBiKKDqkSjStmMAZCBCduB5Ht5buyM6ywrAYZAo2I9gAcRs9ZAZCMFsQRskoiZBAhvwZDZD";

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
