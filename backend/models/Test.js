const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TestSchema = new Schema({
  quizTitle: {
    type: String,
    required: true,
  },
  dateOuverture: {
    type: String,
    required: true,
  },
  dateModification: {
    type: String,
    required: true,
  },
  duree: {
    type: Number,
    required: true,
  }

});

const Test = mongoose.model("Test", TestSchema);
module.exports = Test;
