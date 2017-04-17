'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twit = require('twit');

var _twit2 = _interopRequireDefault(_twit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = new _twit2.default({
    consumer_key:         "iGe22ai4fSLmSxCCtjBc7HlR1",
     consumer_secret:      'xLRUsAUQp9VA66OQnYk0BrDNrOf1UEeNFAfvK4UxMPYqi9R9lE',
     access_token:         '849757768672325632-dRNIBHOqik6carryUbdOar7v1pNLjtB',
     access_token_secret:  'Bx0Z2NFvhy9rQJoBVCHBGsFvVAN9CNqQkQQEzyHCC9G5j',
     timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
 });

exports.default = Twitter;
