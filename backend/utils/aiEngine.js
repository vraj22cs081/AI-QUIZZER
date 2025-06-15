const sampleQuestions = [
    {
        questionText: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
    },
    {
        questionText: "What is 3 x 3?",
        options: ["6", "9", "12", "15"],
        correctAnswer: "9",
    },
    {
        questionText: "What is 10 - 7?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
    },
];

exports.generateQuiz = (grade, subject, numQuestions = 3) => {
    // In real use-case, you'd generate based on subject/grade
    return sampleQuestions.slice(0, numQuestions);
};

exports.evaluateAnswers = (quizQuestions, userAnswers) => {
    let score = 0;
    let correctAnswers = [];

    quizQuestions.forEach((q, idx) => {
        const userAnswer = userAnswers.find((a) => a.questionId === idx);
        if (userAnswer && userAnswer.answer === q.correctAnswer) {
            score++;
        }
        correctAnswers.push({ questionId: idx, correctAnswer: q.correctAnswer });
    });

    return { score, total: quizQuestions.length, correctAnswers };
};