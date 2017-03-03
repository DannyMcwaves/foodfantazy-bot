/**
 * Created by danny_mcwaves on 3/3/17.
 */

import Download from "./download";

let sources = ["https://www.reddit.com/r/creepy.json", "https://www.reddit.com/r/creepy_gifs.json"];

let getReddit = () => {
    for (let i of sources) {
        Download(i);
    }
};

export default getReddit;
