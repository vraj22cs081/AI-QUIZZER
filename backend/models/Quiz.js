const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    user: {                    
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        default: "general",
    },
    questions: [
        {
            questionText: String,   
            options: [String],
            correctAnswer: String
        }
    ],
    createdAt: {              
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Quiz", quizSchema);
