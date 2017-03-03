'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by danny_mcwaves on 3/3/17.
                                         */

var recordSchema = new Schema({
    url: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
});

var Record = _mongoose2.default.model('Record', recordSchema);

exports.default = Record;
