/**
 * Created by danny_mcwaves on 3/2/17.
 */

import tumblr from 'tumblr.js';

const client = tumblr.createClient({
    credentials: {
        consumer_key: '0OWZhEe9fJVO2pVCPVEwxbBFRYWCapxt6JemjYVjDtPPHmiu29',
        consumer_secret: 'I8tz401cwmokQdIlFLLPYukWMysNfkT0Ml4ENHx6bETQKRhYc1',
        token: '0OWZhEe9fJVO2pVCPVEwxbBFRYWCapxt6JemjYVjDtPPHmiu29',
        token_secret: 'I8tz401cwmokQdIlFLLPYukWMysNfkT0Ml4ENHx6bETQKRhYc1'
    },
    returnPromises: true
});

export default client;
