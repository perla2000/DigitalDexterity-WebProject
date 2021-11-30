const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var TestSchema = new Schema({
  Test_Desc: {
    type: String,
    required: true,
  },
  Test_Type: {
    type: String,
    required: true,
  },
  // category:
  //     {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: 'Survey_Category'
  //     },
  // organisation:
  //     {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: 'Organisation'
  //     }
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
