"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("./config/db");

var _db2 = _interopRequireDefault(_db);

var _index3 = require("./reddit/index");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _index4.default)();
var Init = function Init(cb) {
    setInterval(function () {
        (0, _index4.default)();
    }, 86400000);
    setTimeout(function () {
        cb();
    }, 8000);
};

// Init(_ => console.log("Starting Saving"));

exports.default = Init;
