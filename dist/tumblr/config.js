'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tumblr = require('tumblr.js');

var _tumblr2 = _interopRequireDefault(_tumblr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = _tumblr2.default.createClient({
    credentials: {
        consumer_key: '0OWZhEe9fJVO2pVCPVEwxbBFRYWCapxt6JemjYVjDtPPHmiu29',
        consumer_secret: 'I8tz401cwmokQdIlFLLPYukWMysNfkT0Ml4ENHx6bETQKRhYc1',
        token: '0OWZhEe9fJVO2pVCPVEwxbBFRYWCapxt6JemjYVjDtPPHmiu29',
        token_secret: 'I8tz401cwmokQdIlFLLPYukWMysNfkT0Ml4ENHx6bETQKRhYc1'
    },
    returnPromises: true
}); /**
     * Created by danny_mcwaves on 3/2/17.
     */

exports.default = client;
