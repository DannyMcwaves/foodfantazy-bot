'use strict';

var _T = require('./T.js');

var _T2 = _interopRequireDefault(_T);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_T2.default.post('statuses/update', { status: 'This is a tweets for the stream listening API to tell me there is a new stream. #HorrorStories' }, function (err, data, response) {
  console.log(data);
}); /**
     * Created by danny_mcwaves on 3/2/17.
     */
