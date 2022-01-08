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
  // Answer_ques: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Answer_Question",
  // },
});

const question = mongoose.model("question", Test_question_schema);
module.exports = question;
