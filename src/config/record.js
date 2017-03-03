/**
 * Created by danny_mcwaves on 3/3/17.
 */

import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const recordSchema = new Schema({
        url: {
            type: String,
            trim: true,
            required: true
        }
    }, {
        timestamps: true
    }
);

const Record = mongoose.model('Record', recordSchema);

export default Record;
