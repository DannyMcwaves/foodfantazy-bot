"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Del = exports.Find = exports.Save = undefined;

var _horror = require("./horror");

var _horror2 = _interopRequireDefault(_horror);

var _record = require("./record");

var _record2 = _interopRequireDefault(_record);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var recordFunction = function recordFunction(url) {
    var record = new _record2.default({ url: url });
    record.save(function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("RECORD SAVED");
        }
    });
};

var horrorFunction = function horrorFunction(obj) {
    var horror = new _horror2.default(obj);
    horror.save(function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("HORROR SAVED");
        }
    });
};

var Save = function Save(obj) {
    _record2.default.find({ url: obj.url }, function (err, res) {
        if (err) {
            console.log("[-] ERROR ", err.stack);
        } else if (res.length === 0) {
            recordFunction(obj.url);
            horrorFunction(obj);
        }
    });
};

var Find = function Find(cb) {
    _horror2.default.find({}).sort({ createdAt: -1 }).limit(1).select({ title: 1, url: 1, _id: 0 }).exec(cb);
};

var Del = function Del(url) {
    _horror2.default.remove({ url: url }, function (err, res) {
        if (err) {
            console.log(err);
        }
    });
};

exports.Save = Save;
exports.Find = Find;
exports.Del = Del;
