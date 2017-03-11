"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _T = require("./T");

var _T2 = _interopRequireDefault(_T);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(img, title) {
    "use strict";
    // uploading the image to twitter now.

    _T2.default.post("media/upload", { media_data: img }).catch(function (err) {
        console.log("[-] ERROR: ", err.stack);
    }).then(function (result) {
        // data and resp are the keys in the result above.
        var data = result.data,
            mediaIdString = data.media_id_string,
            altText = "horror story pic post.",
            meta_params = { media_id: mediaIdString, alt_text: { text: altText } };

        // create the metadata of the media OP and then post the metadata.
        _T2.default.post("media/metadata/create", meta_params).catch(function (err) {
            console.log("[-] ERROR: ", err.stack);
        }).then(function (result) {
            // now we can reference the media posted and then attach a tweet to it.
            var hastags = "#REVELATOR #horrorfilm #horror #indiefilm";
	    var stat = title + " " + hastags;
	    var stats = stat.length < 140 ? stat : title.length < 140 ? title : hastags;
            var params = { status: stats, media_ids: [mediaIdString] };
            _T2.default.post("statuses/update", params).catch(function (err) {
                console.log("[-] ERROR: ", err.stack);
            }).then(function (result) {
                console.log(result.data);
            });
        });
    });
}; /**
    * Created by danny_mcwaves on 3/2/17.
    */
// this is one is going to tweet images from the file system to the twitter account.
// should be that simple to finish btw.

exports.default = Post;
