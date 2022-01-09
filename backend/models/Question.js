const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Test_question_schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  Test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
});

const question = mongoose.model("question", Test_question_schema);
module.exports = question;
