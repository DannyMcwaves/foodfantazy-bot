"use strict";

var _T = require("./T");

var _T2 = _interopRequireDefault(_T);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accounts = ["TheHorrorMaster", "eliroth", "ShockWavesPod", "BDisgusting", "Scream_Factory", "HorrorPlaces", "StephenKing", "wescraven", "HorrorSociety", "HorrorNights", "CAVITYCOLORS", "blumhouse", "DreadCentral", "shudder", "HorrorNewsNet", "JerryisjustOK", "lionsgatehorror", "TheRealElvira", "PromoteHorror", "HorrorMovies", "AHSFX", "HorrorTalk", "Miami_Horror", "HorrorFreakNews", "horror_channel", "ScreamHorrorMag", "FANGORIA", "horrorasylum", "bghorror", "LukeOfHorror", "EXTREMEINDIE", "IndieWire", "GrindhouseFilm", "FDTimes", "filmindependent", "ThatKevinSmith", "the_moviebob", "filmcourage", "FilmSnobbery", "slashfilm", "FilmThreat", "iIovefilm", "FilmStruck", "FilmPopCulture", "RebekahMcKendry", "wilw", "RottenTomatoes", "moviesdotcom", "ColliderVideo", "bmoviesd", "HuffPostEnt"],
    i = 0; /**
            * Created by danny_mcwaves on 3/2/17.
            */
// using the stream API to get updates on tweets belonging to me.
// updates on my tweets, retweet, likes, faves of my tweets.

console.log("STARTING TO GET INTERACTIVE ON TWITTER");

var Retweeters = function Retweeters(id) {
    "use strict";
    // get a list of retweeters for a tweet

    _T2.default.get("statuses/retweeters/ids", { id: id }).then(function (res) {
        var toFollow = res.data.ids.slice(0, 5);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = toFollow[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _i = _step.value;

                Follow(_i);
                Favorite(_i);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }).catch(function (err) {
        console.log(err.name);
    });
};

var Follow = function Follow(id) {
    "use strict";

    _T2.default.post("friendships/create", { user_id: id }).then(function (res) {
        console.log(res.data.name);
    }).catch(function (err) {
        console.log(err.name);
    });
};

var Fav = function Fav(id) {
    "use strict";

    _T2.default.post("favorites/create", { id: id }).then(function (res) {
        console.log(res.data.text);
    }).catch(function (err) {
        console.log(err.name);
    });
};

var Favorite = function Favorite(id) {
    "use strict";

    _T2.default.get("statuses/user_timeline", { user_id: id, count: 2 }).then(function (res) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = res.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _i2 = _step2.value;

                Fav(_i2.id_str);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }).catch(function (err) {
        console.log(err.name);
    });
};

var Tweets = function Tweets(account) {
    "use strict";

    console.log(account);
    _T2.default.get("statuses/user_timeline", { screen_name: account, count: 5 }).then(function (res) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = res.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _i3 = _step3.value;

                Retweeters(_i3.id_str);
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
    }).catch(function (err) {
        console.log(err.name);
    });
};

Tweets(accounts[i]);
i++;

setInterval(function () {
    Tweets(accounts[i]);
    if (i < 50) {
        i++;
    } else {
        i = 0;
    }
}, 86400000);
