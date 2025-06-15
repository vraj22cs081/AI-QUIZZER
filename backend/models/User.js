const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: String, // Optional, can be removed if not needed
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);