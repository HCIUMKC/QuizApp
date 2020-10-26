const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema( {
    question: {
        type: String,
        required: true,
        unique: true
    },
    answers: [String]

});

module.exports = mongoose.model('Qnas', QuestionSchema);