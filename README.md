# 🧠 AI-QUIZZER Microservice

AI-QUIZZER is a Node.js-based backend service for generating AI-based quizzes, allowing users to login, generate quizzes, submit answers, view history, and retry past quizzes. It uses **MongoDB Atlas** as the database, supports **JWT-based authentication**, and is fully **Dockerized** for easy deployment. The project is deployed on **Railway**.
As ,such sql is not used I have use mongo db refers models for more information
---


# 📁 Available Scripts

In the `backend` directory, you can run:

# `npm start`

Runs the backend server in development mode.  
It connects to MongoDB Atlas and listens on the configured port (default: `9090`).

```bash
npm start

 Step 1: Build the Docker image
docker build -t ai-quizzer .

Step 2: Run the container
docker run -p 9090:9090 \
-e MONGO_URI="your_connection_string" \
-e JWT_SECRET="your_secret_key" \
ai-quizzer

# 🌐 Live Deployment

🔗 [https://ai-quizzer-production.up.railway.app](https://ai-quizzer-production.up.railway.app)

---

# 📦 Features

- 🧑 User login (mock login with username)
- 📝 Quiz generation with grade and subject
- ✅ Submit answers
- 📊 View quiz history
- 🔁 Retry past quizzes
- 🔐 JWT-secured API routes
- 🐳 Dockerized setup
- ☁️ MongoDB Atlas integration
- 🚀 Deployment on Railway

- # ✅ Requirements

- Node.js (v16+)
- MongoDB Atlas account
- Docker (for containerization)
- Git
- Postman (for API testing)
