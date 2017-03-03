import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const horrorSchema = new Schema({
    title: String,
    url: {
      type: String,
      trim: true,
      required: true
    }
  }, {
    timestamps: true
  });

const Horrors = mongoose.model('Horrors', horrorSchema);

export default Horrors;
