"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _req = require("../req");

var _req2 = _interopRequireDefault(_req);

var _base = require("../config/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Download = function Download(url) {
    (0, _req2.default)(url, null, function (data) {
        var obj = JSON.parse(data);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = obj.data.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;


                var end = i.data.url.split(".").pop();

                if (["jpg", "jpeg", "png", "gif", "svg"].indexOf(end) !== -1) {
                    var _data = {
                        title: i.data.title,
                        url: i.data.url
                    };
                    (0, _base.Save)(_data);
                }
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
    });
};

exports.default = Download;
