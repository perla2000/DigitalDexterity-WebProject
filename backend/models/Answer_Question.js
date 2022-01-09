const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Answer_Question_schema = new Schema({
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  correct_answer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "answer",
  },
});

const Answer_Question = mongoose.model(
  "Answer_Question",
  Answer_Question_schema
);
module.exports = Answer_Question;
