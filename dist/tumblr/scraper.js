"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

var _base = require("../config/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tumblr = function Tumblr(title, data) {
    "use strict";

    var $ = _cheerio2.default.load(data);

    $("img").each(function (i, tag) {
        var src = tag.attribs.src;
        if (src.indexOf("avatar") === -1 && src.indexOf("px.srvcs") === -1) {
            (0, _base.Save)({
                title: title,
                url: src
            });
        }
    });
};

exports.default = Tumblr;
