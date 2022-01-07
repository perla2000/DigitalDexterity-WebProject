const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var answer_schema = new Schema({
  description: {
    type: Array,
    required: true,
  },
  Answer_question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer_Question",
  },
});

var answers = mongoose.model("answer", answer_schema);

module.exports = answers;
