/**
 * Created by danny_mcwaves on 3/3/17.
 */

import db from "./config/db";
import getReddit from "./tumblr/index";
import getTumblr from "./reddit/index";


const Init = (cb) => {
    getTumblr();
    getReddit();
    setInterval(() => {
        getTumblr();
        getReddit();
    }, 86400000);
    cb();
};

export default Init;
