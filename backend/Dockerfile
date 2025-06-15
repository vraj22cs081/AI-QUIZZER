# Use Node.js official image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Environment variable for port
ENV PORT=9090

# Expose app port
EXPOSE 9090

# Start app
CMD ["node", "server.js"]
