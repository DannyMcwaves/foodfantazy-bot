/**
 * Created by danny_mcwaves on 3/2/17.
 */
// this is one is going to tweet images from the file system to the twitter account.
// should be that simple to finish btw.

import Twitter from "./T";

const Post = (img, title) => {
    "use strict";
    // uploading the image to twitter now.
    Twitter.post("media/upload", {media_data: img})
        .catch(err => {
            console.log("[-] ERROR: ", err.stack);
        })
        .then(result => {
            // data and resp are the keys in the result above.
            let data = result.data,
                mediaIdString = data.media_id_string,
                altText = "horror story pic post.",
                meta_params = {media_id: mediaIdString, alt_text:{text: altText}};

            // create the metadata of the media OP and then post the metadata.
            Twitter.post("media/metadata/create", meta_params)
                .catch(err => {
                    console.log("[-] ERROR: ", err.stack);
                })
                .then(result => {
                    // now we can reference the media posted and then attach a tweet to it.
                    let hastags = "#REVELATOR #horrorfilm #horror #indiefilm #film #movie #trailer #SupportIndieFilm #ComingSoon #horrormovies #horrormovie #staytuned #ghost #creepy #spooky #boo #halloween #streaming #cinema #filmmaking #itunes #netflix #follow #rt"
                    let params = { status: title + " " + hastags, media_ids: [mediaIdString] };
                    Twitter.post("statuses/update", params)
                        .catch(err => {
                            console.log("[-] ERROR: ", err.stack);
                        })
                        .then(result => {
                            console.log(result.data);
                        })
                })
        })
};

export default Post;
