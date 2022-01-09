const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Test_User_schema = new Schema({
  note_test: {
    type: Number,
    // required: true,
  },
  code: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  Test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
const Test_User = mongoose.model("test_user", Test_User_schema);
module.exports = Test_User;
