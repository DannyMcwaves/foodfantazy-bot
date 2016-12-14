import mongoose from 'mongoose'
const Schema = mongoose.Schema

const festivalSchema = new Schema({
  title: {
    type: String
  },
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Festivals = mongoose.model('Festivals', festivalSchema)

export default Festivals
