"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = require("./config/db");

var _db2 = _interopRequireDefault(_db);

var _index = require("./tumblr/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("./reddit/index");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Init = function Init(cb) {
    (0, _index4.default)();
    (0, _index2.default)();
    setInterval(function () {
        (0, _index4.default)();
        (0, _index2.default)();
    }, 86400000);
    cb();
}; /**
    * Created by danny_mcwaves on 3/3/17.
    */

exports.default = Init;
