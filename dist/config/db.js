'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DBurl = 'mongodb://heroku_d5nrx6mg:6elr73okuem5p8u3f6uct432tg@ds161950.mlab.com:61950/heroku_d5nrx6mg';
//var DBurl = 'mongodb://localhost:27017/content';
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
