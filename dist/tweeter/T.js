'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _twit = require('twit');

var _twit2 = _interopRequireDefault(_twit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = new _twit2.default({
  consumer_key: "ns9vWFOTffIdTMwYDr6EzyKSY",
  consumer_secret: 'UgEtCAdNNfDX7Q3SPzPeaxrJDWfNC1DNB27PbhJRP5Wx5RX5nF',
  access_token: '3240991202-BETHIwQwTuu9GIaUE4onPwfdFvoJeUDciRh8nQF',
  access_token_secret: 'XM5DKYaqX9iiP6CVK5UbU3QFTitxtcl96u6VftYBVfbVl',
  timeout_ms: 60 * 1000 });

exports.default = Twitter;
