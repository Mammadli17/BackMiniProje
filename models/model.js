const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: String,
  category: String,
  time: String,
  date:String,
  note: String,
  completed:Boolean
});

const User = mongoose.model('user', categorySchema);
module.exports = {
  User
}