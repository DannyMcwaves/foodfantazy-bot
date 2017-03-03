
import cheerio from "cheerio";
import {Save} from "../config/base";

let Tumblr = (title, data) => {
    "use strict";

    let $ = cheerio.load(data);

    $("img").each((i, tag) => {
        let src = tag.attribs.src;
        if (src.indexOf("avatar") === -1 && src.indexOf("px.srvcs") === -1) {
            Save({
                title: title,
                url: src
            });
        }
    });

};

export default Tumblr;