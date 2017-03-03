import mongoose from 'mongoose';
const DBurl = 'mongodb://heroku_6qp6pwvz:8vbp81kmm8gs6013ni2p9pojdp@ds113580.mlab.com:13580/heroku_6qp6pwvz';
mongoose.connect(DBurl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("Connected correctly to server")
});

db.on("close", () => {
  console.log("Database is closed now");
});

export default db
