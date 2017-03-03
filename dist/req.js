"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_request2.default.defaults({
    encoding: "base64"
});

var Req = function Req(url, title, callback) {
    _request2.default.get(url, function (err, res, body) {
        if (err) {
            console.log(err);
        } else if (title === null) {
            callback(body);
        } else {
            callback(title, body);
        }
    });
};

exports.default = Req;
