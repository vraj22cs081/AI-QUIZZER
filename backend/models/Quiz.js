const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    user: {                    // Changed from username to user
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
            questionText: String,   // Changed to match aiEngine.js
            options: [String],
            correctAnswer: String
        }
    ],
    createdAt: {              // Changed from completedDate
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Quiz", quizSchema);
