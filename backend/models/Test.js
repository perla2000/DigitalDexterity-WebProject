const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TestSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  Date_ouverture: {
    type: String,
    required: true,
  },
  Date_modifie: {
    type: String,
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
});

const Test = mongoose.model("Test", TestSchema);
module.exports = Test;
