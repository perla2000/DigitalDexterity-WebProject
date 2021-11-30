const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var question_Category_schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
});


const Question_Category= mongoose.model('Question_Category',question_Category_schema);
module.exports=Question_Category;