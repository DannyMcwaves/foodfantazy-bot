/**
 * Created by danny_mcwaves on 3/2/17.
 */
import Twitter from "./T.js";

Twitter.post('statuses/update', { status: 'This is a tweets for the stream listening API to tell me there is a new stream. #HorrorStories' },
    function(err, data, response) {
    console.log(data)
});
