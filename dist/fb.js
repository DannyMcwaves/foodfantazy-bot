"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by danny_mcwaves on 3/5/17.
 */

// this is the facebook script.

var fb = require("fbgraph"),
    accessToken = "EAADgche8ZAXYBAOLGWM40ERAka8EG6mrgTulypa8yR1Fi38ZBWc2yyrEfvGkQd2f2AJvOXRNelq6vvfl9HtvmbMZAfuLZClFoZA410st0O45dW4XXmU0MFZB5iA0KGZCFbzBwSc6W92kREuBU12UbbuBNHjH0Pcyiz9PrhBPPLrStlLpPl4FEadwwZAgkc7Vt7MZD",
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
