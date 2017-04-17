"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _download = require("./download");

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sources = ["https://www.reddit.com/r/food/top.json?sort=top&t=day&limit=8", "https://www.reddit.com/r/FoodPorn/top.json?sort=top&t=day&limit=8"];

var getReddit = function getReddit() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = sources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            (0, _download2.default)(i);
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
};

exports.default = getReddit;
