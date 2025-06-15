const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
    generateQuiz,
    submitQuiz,
    getQuizHistory,
    retryQuiz,
} = require("../controllers/quizController");

router.post("/generate", protect, generateQuiz);
router.post("/submit", protect, submitQuiz);
router.get("/history", protect, getQuizHistory);
router.post("/retry/:quizId", protect, retryQuiz);

module.exports = router;