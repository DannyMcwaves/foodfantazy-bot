/**
 * Created by danny_mcwaves on 3/2/17.
 */

import client from "./config";
import Tumblr from "./scraper";
import Req from "../req";

const Blog = (url) => {
    client.blogPosts(url, {type: "photo"})
        .catch(err => {
            console.log(err.stack);
        })
        .then(res => {
            for (let i of res.posts) {
                Req(i.post_url, i.summary, Tumblr);
            }
        })
};

export default Blog;
