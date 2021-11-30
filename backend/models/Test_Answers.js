const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Test_Answers_schema = new Schema({
  Test_User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "test_user",
  },
  Answer_Question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answer_Question",
  },
});

const Test_Answers = mongoose.model("test_answer", Test_Answers_schema);
module.exports = Test_Answers;
