"use strict";

var _base = require("./config/base");

var _tweet = require("./tweeter/tweet");

var _tweet2 = _interopRequireDefault(_tweet);

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _save = require("./save");

var _save2 = _interopRequireDefault(_save);

var _child_process = require("child_process");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by danny_mcwaves on 3/3/17.
 */

var find = function find() {

    var tweet = function tweet() {
        (0, _base.Find)(function (err, data) {
            if (!err) {
                (function () {
                    var image = data[0],
                        end = image.url.split(".").pop();
                    (0, _request2.default)(image.url, { encoding: "binary" }, function (err, res, data) {
                        if (!err) {
                            _fs2.default.writeFile("./images/downloaded." + end, data, 'binary', function (err) {
                                if (!err) {
                                    var postData = _fs2.default.readFileSync("./images/downloaded." + end, { encoding: "base64" });
                                    (0, _tweet2.default)(postData, image.title);
                                    (0, _base.Del)(image.url);
                                }
                            });
                        }
                    });
                })();
            }
        });
    };

    setTimeout(tweet, 120000);
    setInterval(tweet, 9000000);
};

var stream = (0, _child_process.spawn)("npm", ["run", "stream"]);
stream.stderr.on("data", function (data) {
    console.log(data.toString());
});
stream.stdout.on("data", function (data) {
    console.log(data.toString());
});

var bind = (0, _child_process.spawn)("npm", ["run", "bind"]);
bind.stderr.on("data", function (data) {
    console.log(data.toString());
});
bind.stdout.on("data", function (data) {
    console.log(data.toString());
});

(0, _save2.default)(find);
