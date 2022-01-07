const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TestSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  Date_ouverture: {
    type: Number,
    required: true,
  },
  Date_modifie: {
    type: Number,
    required: true,
  },
  Duree: {
    type: Number,
    required: true,
  },
  TestUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "test_user",
  },
  Question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
});

const Test = mongoose.model("Test", TestSchema);
module.exports = Test;
