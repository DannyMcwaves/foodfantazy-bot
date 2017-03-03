/**
 * Created by danny_mcwaves on 3/2/17.
 */
// using the stream API to get updates on tweets belonging to me.
// updates on my tweets, retweet, likes, faves of my tweets.

import Twitter from "./T";

let accounts = [
    "TheHorrorMaster",
    "eliroth",
    "ShockWavesPod",
    "BDisgusting",
    "Scream_Factory",
    "HorrorPlaces",
    "StephenKing",
    "wescraven",
    "HorrorSociety",
    "HorrorNights",
    "CAVITYCOLORS",
    "blumhouse",
    "DreadCentral",
    "shudder",
    "HorrorNewsNet",
    "JerryisjustOK",
    "lionsgatehorror",
    "TheRealElvira",
    "PromoteHorror",
    "HorrorMovies",
    "AHSFX",
    "HorrorTalk",
    "Miami_Horror",
    "HorrorFreakNews",
    "horror_channel",
    "ScreamHorrorMag",
    "FANGORIA",
    "horrorasylum",
    "bghorror",
    "LukeOfHorror",
    "EXTREMEINDIE",
    "IndieWire",
    "GrindhouseFilm",
    "FDTimes",
    "filmindependent",
    "ThatKevinSmith",
    "the_moviebob",
    "filmcourage",
    "FilmSnobbery",
    "slashfilm",
    "FilmThreat",
    "iIovefilm",
    "FilmStruck",
    "FilmPopCulture",
    "RebekahMcKendry",
    "wilw",
    "RottenTomatoes",
    "moviesdotcom",
    "ColliderVideo",
    "bmoviesd",
    "HuffPostEnt"
],
    i = 0;

console.log("STARTING TO GET INTERACTIVE ON TWITTER");

let Retweeters = id => {
    "use strict";
    // get a list of retweeters for a tweet
    Twitter.get("statuses/retweeters/ids", {id:id})
        .then(res => {
            let toFollow = res.data.ids.slice(0, 5);
            for (let i of toFollow) {
                Follow(i);
                Favorite(i);
            }
        })
        .catch(err => {
            console.log(err.name);
        })
};


let Follow = id => {
    "use strict";
    Twitter.post("friendships/create", {user_id: id})
        .then(res => {
            console.log(res.data.name);
        })
        .catch(err => {
            console.log(err.name);
        })

};


let Fav = id => {
    "use strict";
    Twitter.post("favorites/create", {id: id})
        .then(res => {
            console.log(res.data.text);
        })
        .catch(err => {
            console.log(err.name);
        })
};

let Favorite = id => {
    "use strict";
    Twitter.get("statuses/user_timeline", {user_id: id, count: 2})
        .then(res => {
            for (let i of res.data) {
                Fav(i.id_str);
            }
        })
        .catch(err => {
            console.log(err.name);
        })
};

let Tweets = account => {
    "use strict";
    console.log(account);
    Twitter.get("statuses/user_timeline", {screen_name: account, count: 5})
        .then(res => {
            for (let i of res.data) {
                Retweeters(i.id_str);
            }
        })
        .catch(err => {
            console.log(err.name);
        })

};

Tweets(accounts[i]);
i++;

setInterval(() => {
    Tweets(accounts[i]);
    if (i < 50) {
        i++;
    } else {
        i = 0;
    }
}, 86400000);
