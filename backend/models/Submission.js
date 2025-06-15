const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
    user: String,
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
    },
    answers: [
        {
            questionId: Number,
            selectedAnswer: String,
        },
    ],
    score: Number,
    total: Number,
    submittedAt: {
        type: Date,
        default: Date.now,      
    },
});

module.exports = mongoose.model("Submission", submissionSchema);