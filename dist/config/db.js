'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DBurl = 'mongodb://heroku_6qp6pwvz:8vbp81kmm8gs6013ni2p9pojdp@ds113580.mlab.com:13580/heroku_6qp6pwvz';
//var DBurl = 'mongodb://localhost:27/content';
_mongoose2.default.connect(DBurl);

var db = _mongoose2.default.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Connected correctly to server");
});

db.on("close", function () {
  console.log("Database is closed now");
});

exports.default = db;
