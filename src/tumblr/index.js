/**
 * Created by danny_mcwaves on 3/3/17.
 */

import Blog from "./download"

let sources = ["culthorrorfilms", "horrorharbour", "horrorfilmflower", "creepy-gifs"];

let getTumblr = () => {
    for(let i of sources) {
        Blog(i);
    }
};


export default getTumblr;
