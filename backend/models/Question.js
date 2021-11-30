const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Test_question_schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  note: {
    type: Number,
    default: false,
    // ref: 'Question_Category'
  },
  Test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
  Answer_ques: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question_Answers",
  },
});

var question = mongoose.model("question", Test_question_schema);
module.exports = question;
