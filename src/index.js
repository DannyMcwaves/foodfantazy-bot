/**
 * Created by danny_mcwaves on 3/3/17.
 */

import {Find, Del} from "./config/base";
import Post from "./tweeter/tweet";
import request from "request";
import fs from "fs";
import Init from "./save";
import {spawn} from "child_process";


let find = () => {

    let tweet = () => {
        Find((err, data) => {
            if (!err) {
                let image = data[0],
                    end = image.url.split(".").pop();
                request(image.url, {encoding: "binary"}, (err, res, data) => {
                    if (!err) {
                        fs.writeFile(`./images/downloaded.${end}`, data, 'binary', function (err) {
                            if (!err) {
                                let postData = fs.readFileSync(`./images/downloaded.${end}`, {encoding: "base64"});
                                Post(postData, image.title);
                                Del(image.url);
                            }
                        });
                    }
                });
            }
        });
    };

    setTimeout(tweet, 120000);
    setInterval(tweet, 9000000)

};


let stream = spawn("npm", ["run", "stream"]);
stream.stderr.on("data", (data) => {
    console.log(data.toString());
});
stream.stdout.on("data", (data) => {
    console.log(data.toString());
});


Init(find);


