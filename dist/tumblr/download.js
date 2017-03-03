"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _scraper = require("./scraper");

var _scraper2 = _interopRequireDefault(_scraper);

var _req = require("../req");

var _req2 = _interopRequireDefault(_req);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog(url) {
    _config2.default.blogPosts(url, { type: "photo" }).catch(function (err) {
        console.log(err.stack);
    }).then(function (res) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = res.posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                (0, _req2.default)(i.post_url, i.summary, _scraper2.default);
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
}; /**
    * Created by danny_mcwaves on 3/2/17.
    */

exports.default = Blog;
