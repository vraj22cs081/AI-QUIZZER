const Quiz = require("../models/Quiz");
const Submission = require("../models/Submission");
const { generateQuiz: aiGenerate, evaluateAnswers } = require("../utils/aiEngine");

exports.generateQuiz = async (req, res) => {
    try {
        const { grade, subject, numQuestions } = req.body;
        const questions = aiGenerate(grade, subject, numQuestions);

        const newQuiz = await Quiz.create({
            user: req.user.username,
            grade,
            subject,
            questions
        });

        res.status(201).json({ quizId: newQuiz._id, questions });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.submitQuiz = async (req, res) => {
    const { quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    const result = evaluateAnswers(quiz.questions, answers);

    const submission = await Submission.create({
        user: req.user.username,
        quizId,
        answers,
        score: result.score,
        total: result.total,
    });

    res.json({ ...result, submissionId: submission._id });
};

exports.getQuizHistory = async (req, res) => {
    const filters = {
        user: req.user.username,
    };

    const { grade, subject, from, to } = req.query;

    if (grade) filters["quiz.grade"] = grade;
    if (subject) filters["quiz.subject"] = subject;

    const dateFilter = {};
    if (from) dateFilter.$gte = new Date(from);
    if (to) dateFilter.$lte = new Date(to);
    if (from || to) filters["submittedAt"] = dateFilter;

    const history = await Submission.find(filters).populate("quizId");

    res.json(history);
};

exports.retryQuiz = async (req, res) => {
    const { quizId } = req.params;
    const { answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    const result = evaluateAnswers(quiz.questions, answers);

    const newSubmission = await Submission.create({
        user: req.user.username,
        quizId,
        answers,
        score: result.score,
        total: result.total,
    });

    res.json({ ...result, newSubmissionId: newSubmission._id });
};
