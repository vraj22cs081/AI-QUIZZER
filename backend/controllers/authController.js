const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) 
        return res.status(400).json({ message: "Username and password required" });

    let user = await User.findOne({ username });
    if (!user) {
        user = await User.create({ username });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
};