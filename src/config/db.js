import mongoose from 'mongoose';
const DBurl = 'mongodb://127.0.0.1:27017/content';
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
