'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var horrorSchema = new Schema({
  title: String,
  url: {
    type: String,
    trim: true,
    required: true
  }
}, {
  timestamps: true
});

var Horrors = _mongoose2.default.model('Horrors', horrorSchema);

exports.default = Horrors;
