const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 9090;
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("MongoDB connection failed:", err));


// user id              eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZyYWoiLCJpYXQiOjE3NDk5ODA0MjQsImV4cCI6MTc0OTk4NDAyNH0.ZlQodQygLorSVsG8e3iBexT4aGH08ALAvf2cBXtusVo
// quiz id              684e996d0803e2ee76dc58e8
// submission id        684e9aac0803e2ee76dc58f1
// retry submission id  684e9c9b0803e2ee76dc5902



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZyYWpzaGFoIiwiaWF0IjoxNzQ5OTgzMjkzLCJleHAiOjE3NDk5ODY4OTN9.m5M6mDFOQPLv-IgF0mLkT2nNBZ_a351YRLQT8QSZoM4
// 684ea0bb0803e2ee76dc590a
// 684ea1400803e2ee76dc5913
// 684ea314f9ed3d49b5d3d7a9