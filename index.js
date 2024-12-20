const express = require("express"); // Corrected package name
const app = express(); // Corrected instantiation
const PORT = 8000;

const { connectMongoDb } = require("./connection"); // Ensure connectMongoDb is correctly implemented
const { logReqRes } = require("./middleware"); // Ensure logReqRes is correctly implemented

const userRoutes = require('./routes/users'); // Fixed variable declaration

// Connect to MongoDB
connectMongoDb("mongodb://127.0.0.1:27017/nodejs").then(() => console.log("MongoDb Connected")
); // Fixed connection string

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Middleware to log requests and responses
app.use(logReqRes("log.txt"));

// Example middleware
// app.use((req, res, next) => {
//     console.log("Hello from middleware 2");
//     next();
// });

// User routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
