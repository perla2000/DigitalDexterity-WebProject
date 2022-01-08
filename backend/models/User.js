const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
  },
  TestUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "test_user",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
